import React, {Component} from 'react';

class Word extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api/word')
    .then(res => res.json())
    .then(data => this.setState({data}));
  }

  handleClick() {
    this.getData();
    // reassign class word to see the css transition with every new word
    var element = document.getElementsByClassName('word')[0];
    element.classList.remove("word");
    void element.offsetWidth;  // -> triggering reflow
    element.classList.add("word");
  }

  render() {
    const {data} = this.state;

    return (
      <div className="word">
    <button onClick={this.handleClick}>
      <i className="material-icons md-48">refresh</i>
    </button>
      <div className="word-name">{data.word}</div>
      <div className="word-meaning">{data.meaning}</div>
      <div className="word-example">"{data.example}"</div>
    </div>
  );
  }

}

export default Word;
