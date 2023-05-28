import React, { Component } from 'react'

class Searchbar extends Component {
  constructor(name: string) {
    super(name)
    this.state = {

    }
  }

  render() {
    return (
        <form className='from'>
          <input type='text'
                 placeholder='Search by Brand'
                 name='title'
                 defaultValue=''
                 >
          </input>
          <button>This Will Become A Thing Probably</button>
        </form>
    )
  }
}


export default Searchbar