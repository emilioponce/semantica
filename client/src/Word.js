import React, {Component} from 'react';

class Word extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api/word')
    .then(res => res.json())
    .then(data => this.setState({data}));
  }

  render() {
    const {data} = this.state;
    return (<div className="word">
      <div className="word-name">{data.word}</div>
      <div className="word-meaning">{data.meaning}</div>
      <div className="word-example">"{data.example}"</div>
    </div>)
  }
}

export default Word;
