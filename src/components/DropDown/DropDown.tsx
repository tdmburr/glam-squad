import React, { Component } from "react";
import "./DropDown.css";
import { brandArray } from "../../Assets/BrandNames";
import { Link } from "react-router-dom";

interface DropDownState {
  brand: string;
}
interface Props {
  // updateBrand: any
  onChange: (selectedBrand: string) => void;
}

class DropDown extends Component<Props, DropDownState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      brand: "",
    };
  }

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
    this.setState({ brand: event.target.value });
    console.log(event.target.value)
  }

  handleClick(event: any) {
    event.prevent.default()
    this.props.onChange(this.state.brand);
  }

  render() {
    return (
      <form className="form">
        <select
          className="select"
          value={this.state.brand}
          onChange={this.handleChange}
        >
          <option disabled>Select Brand</option>
          {this.createOptions()}
        </select>
        <div className="dropDownButtonContainer">
          <button className="dropDownButtons" onClick={(event) => this.handleClick(event)}>
            SUBMIT
          </button>
        </div>
      </form>
    );
  }
}

export default DropDown;
