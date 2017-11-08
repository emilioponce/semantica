import React, {Component} from 'react';
import './App.css';
import Palabra from './Palabra';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header>header</header>
        <div className="left-sidebar">izquierda</div>
        <main>
        <Palabra/>
        </main>
        <div className="right-sidebar">derecha</div>
        <footer>footer</footer>
     </div>);
  }
}

export default App;
