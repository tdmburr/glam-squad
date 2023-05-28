import React, { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls'
import logo from '../../Assets/glam-logo.png'
import data from '../../mockData.js'
import Header from '../Header/Header'
import Searchbar  from '../Searchbar/Searchbar'

apiCalls()

export class App extends Component {
  constructor(name: string) {
    super(name)
    this.state = {
      allMakeUp: [],

    }
  }

  render() {
    return (
        <div className="App">
          <Header />
          <Searchbar />
        </div>
    )
  }
}

export default App;