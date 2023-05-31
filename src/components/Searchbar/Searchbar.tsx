import React, { Component } from 'react';
import './Searchbar.css'

class Searchbar extends Component {
  constructor(name: string) {
    super(name)
    this.state = {

    }
  }

  render() {
    return (
        <form className='form'>
          <input className='input' type='text'
            placeholder='Search Products'
            name='title'
            defaultValue=''>
          </input>
          <div className='search-button-container'>
            <button className='search-buttons'>SUBMIT</button>
            <button className='search-buttons'>CLEAR</button>
          </div>
        </form>
    );
  };
};


export default Searchbar;