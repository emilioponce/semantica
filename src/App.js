import React, {Component} from 'react';

import './App.css';

import Word from './Word';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header>Título de la aplicación</header>
        <div className="left-sidebar"/ >
        <main><Word/></main>
        <div className="right-sidebar" />
        <footer>Aviso Legal | Créditos | Atribución </footer>
     </div>);
  }
}

export default App;
