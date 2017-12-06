import React, {Component} from 'react';

class Controls extends Component {

  handleClick() {
     console.log("click recieved");
  }

  render() {
    return <div className="controls">
      <button onClick={this.handleClick}>Nueva palabra</button>
    </div>
  }
}

export default Controls;
