import React, { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls'
import logo from '../../Assets/glam-logo.png'

apiCalls()

export class App extends Component {
  constructor(name: string) {
    super(name)
    this.state = {

    }
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>  
        </div>
    )
  }
}

export default App;