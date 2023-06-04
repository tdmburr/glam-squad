import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "../Header/Header";
import acquireInfo from "../../apiCalls";
import CardsContainer from "../CardsContainer/CardsContainer";
import { IProduct } from "../../utilities";
import { brandArray } from "../../Assets/BrandNames";
import { Route, Switch } from "react-router-dom";
import ProductInfo from "../ProductInfo/ProductInfo";

interface Props {}
interface State {
  allMakeUp: IProduct[];
  defaultBrand: string;
  selectedBrand: string | undefined;
  error: string | null;
};

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allMakeUp: [],
      selectedBrand: undefined,
      defaultBrand: "CoverGirl",
      error: null,
    };
  };

  componentDidMount() {
    acquireInfo(this.state.defaultBrand)
    .then((data: IProduct[]) => {
      this.setState({ allMakeUp: data });
    })
    .catch(() => {
      this.setState({ error: "Oops, that's not very glam-of-us" });
    });
  };

  createOptions = () => {
    const brands = brandArray.map((brand) => {
      return (
        <option key={brand} value={brand}>
          {brand}
        </option>
      );
    });
    return brands;
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedBrand: event.target.value});
    acquireInfo(event.target.value)
      .then((data: IProduct[]) => {
        this.setState({ allMakeUp: data });
      })
      .catch(() => {
        this.setState({ error: "Oops, that's not very glam-of-us" });
      });
  };

  render() {
    const { allMakeUp, defaultBrand, selectedBrand } = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <form className="form">
                  <select
                    className="select"
                    value={selectedBrand}
                    onChange={this.handleChange}
                  >
                    <option disabled>Select Brand</option>
                    {this.createOptions()}
                  </select>
                  <div className="dropDownButtonContainer">
                  </div>
<<<<<<< refactor/clean-up
                </form>
                <div className="featured-container">
                  <h3 className="featured-brand">
                    Featured Brand: {selectedBrand || defaultBrand} 
                  </h3>
                </div>
                <CardsContainer allMakeUp={allMakeUp} />
              </>
            )}
          />
=======
                  <form className="form">
                    <select
                      className="select"
                      value={selectedBrand}
                      onChange={this.handleChange}
                    >
                      <option disabled>
                        Select Brand
                      </option>
                      {this.createOptions()}
                    </select>
                    <div className="dropDownButtonContainer"></div>
                  </form>
                  <div className="featured-container"></div>
                  <CardsContainer allMakeUp={allMakeUp} />
                </>
              )}
            />
          )}
>>>>>>> local
          <Route
            path="/:brand/:id"
            render={({ match }) => (
              <>
                <ProductInfo id={match.params.id} brand={match.params.brand} />
              </>
            )}
          />
        </Switch>
      </div>
    );
  };
};

export default App;
