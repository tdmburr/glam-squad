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
  randomBrand: string, 
  error: string | null
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      allMakeUp: [],
      randomBrand: "dior",
      error: null
    }
  }

  // brandArray[Math.floor(Math.random() * brandArray.length)]
  componentDidMount(){      
    // acquireInfo("Colourpop")
    acquireInfo(this.state.randomBrand)
    .then((data:IProduct[]) => {
      this.setState({ allMakeUp: data }, () => {
      })
    })
    .catch(() => {
      this.setState({error: "Oops, that's not very glam-of-us"})
    })
  }



  render() {
    const {  allMakeUp, randomBrand } = this.state;
    return (
        <div className="App">
          <Header />
          <DropDown />
          <div className='featured-container'>
             <h3 className='featured-brand'>Featured Brand : {randomBrand}</h3>
          </div>
          <CardsContainer allMakeUp={ allMakeUp }/>
        </div>
    )
  }
}

export default App;