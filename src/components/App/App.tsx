import React, { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls'
// import logo from '../../Assets/glam-logo.png'
// import data from '../../mockData.js'
import Header from '../Header/Header'
import acquireInfo from '../../apiCalls';
import CardsContainer from '../CardsContainer/CardsContainer';
import { Interface } from 'readline';
import { IProduct } from '../../utilities';
import DropDown from '../DropDown/DropDown';




interface Props{};
interface State {
  allMakeUp: IProduct[]
}

export class App extends Component<Props, State> {
  constructor(name: string) {
    super(name)
    this.state = {
      allMakeUp: [],

    }
  }

  componentDidMount(){
    acquireInfo("")
    .then(data => {
      console.log(data)
      this.setState({ allMakeUp: data })
    })
  }

  render() {
    return (
        <div className="App">
          <Header />
          <DropDown />
          <CardsContainer allMakeUp={this.state.allMakeUp}/>
        </div>
    )
  }
}

export default App;