import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import actions from './action';

class ClasseSecundaria extends Component {
  changeWellcomeText() {
    this.props.dispatch(actions.changeWellcomeText('Bem vindo ao Redux'));
  }

  render() {
      return (<button onClick={() => this.changeWellcomeText()}>Alterar o txt de boas vindas</button>)
  }
}

const ClasseSecundariaConnected = connect(store => ({ text: store.text }))(ClasseSecundaria);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ this.props.text }</h2>
          <ClasseSecundariaConnected />
        </div>
      </div>
    );
  }
}

export default connect(store => ({ text: store.text }))(App);