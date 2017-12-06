import React, {Component} from 'react';

import './App.css';

import Word from './Word';
import MainTitle from './MainTitle';
import Controls from './Controls';
import User from './User';

class App extends Component {

  render() {
    return (<div id="App">
      <MainTitle/>
      <Controls/>
      <User/>
      <div className="left-sidebar"/>
      <main><Word/></main>
      <div className="right-sidebar"/>
      <footer>
        <a href="http://github.com/emilioponce">Contacto</a>
      </footer>
    </div>);
  }
}

export default App;
