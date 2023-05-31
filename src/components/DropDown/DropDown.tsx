import React, { Component } from 'react';
import './DropDown.css';
import { brandArray } from '../../Assets/BrandNames';
import { Link } from 'react-router-dom'

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
    this.setState({brand: event.target.value})
  }

  render() {
    return (
        <form className='form'>
          <select className='select'
          value={this.state.brand}
            onChange={this.handleChange}>
            <option disabled>
              Select Brand
            </option>
            {this.createOptions()}
          </select>
          <div className='dropDownButtonContainer'>
          <Link to={`/brand/${this.state.brand}`} >
            <button className='dropDownButtons'>SUBMIT</button>
            </Link>
            <button className='dropDownButtons'>CLEAR</button>

          </div>
        </form>
    );
  };
};


export default DropDown;