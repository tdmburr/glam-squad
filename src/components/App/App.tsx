import React, { Component, Fragment } from "react";
import "./App.css";
import apiCalls from "../../apiCalls";
import Header from "../Header/Header";
import acquireInfo from "../../apiCalls";
import CardsContainer from "../CardsContainer/CardsContainer";
import { Interface } from "readline";
import { IProduct } from "../../utilities";
import DropDown from "../DropDown/DropDown";
import { brandArray } from "../../Assets/BrandNames";
import { Route, Switch } from "react-router-dom";
import ProductInfo from "../ProductInfo/ProductInfo";

interface Props {}
interface State {
  allMakeUp: IProduct[];
  randomBrand: string;
  error: string | null;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allMakeUp: [],
      randomBrand: brandArray[Math.floor(Math.random() * brandArray.length)],
      error: null,
    };
  }

  componentDidMount() {
    acquireInfo(this.state.randomBrand)
      .then((data: IProduct[]) => {
        this.setState({ allMakeUp: data }, () => {});
      })
      .catch(() => {
        this.setState({ error: "Oops, that's not very glam-of-us" });
      });
  }

  

  render() {
    const { allMakeUp, randomBrand } = this.state;
    return (

      <div className="App">
        <Header />
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <>
                <DropDown />
                <div>
                  <h3>Featured Brand: {randomBrand}</h3>
                </div>
                <CardsContainer allMakeUp={allMakeUp} />
              </>
            )}
          />
          <Route path='/:brand/:id' render={({match}) => <>
          <ProductInfo id={match.params.id} brand={match.params.brand} />
          </>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
