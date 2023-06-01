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
import { brandArray } from '../../Assets/BrandNames';




interface Props{};
interface State {
  allMakeUp: IProduct[],
  randomBrand: string 
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      allMakeUp: [],
      randomBrand: brandArray[Math.floor(Math.random() * brandArray.length)]
    }
  }

  componentDidMount(){      
    acquireInfo(this.state.randomBrand)
    .then((data:IProduct[]) => {
      console.log(data)
      this.setState({ allMakeUp: data }, () => {
      })
    })
  }



  render() {
    const {  allMakeUp, randomBrand } = this.state;
    return (
        <div className="App">
          <Header />
          <DropDown />
          <div>
             {randomBrand}
          </div>
          <CardsContainer allMakeUp={ allMakeUp }/>
        </div>
    )
  }
}

export default App;