import React, { Component } from 'react';
import './DropDown.css';
import { brandArray } from '../../Assets/BrandNames';

interface DropDownState {
  brand: string;
}
class DropDown extends Component<{}, DropDownState> {
  constructor(props:{}) {
    super(props)
    this.state = {
      brand: ''
    }
  }

  createOptions = () => {
    const brands = brandArray.map((brand) => {
      return (
          <option key={brand} value={brand}>
            { brand }
          </option>
        )
    })
    return brands
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // const selectedBrand: string = event.target.value;
    this.setState({brand: event.target.value})
  }

  render() {
    return (
        <form className='form'>
          <select className='select'
            onChange={this.handleChange}>
            <option>
              Select Brand
            </option>
            {this.createOptions()}
          </select>
          <div className='dropDownButtonContainer'>
            <button className='dropDownButtons'>SUBMIT</button>
            <button className='dropDownButtons'>CLEAR</button>
          </div>
        </form>
    );
  };
};


export default DropDown;