import React, { Component } from 'react';
import 
import 'ProductInfo.css'

export class ProductInfo extends Component {
  constructor(card: any) {
    super(card)
    this.state = {
      product: {}
    }
  }
  render() {
    return (
      <li key={card.id}>
        <img src={card.image_link} alt={card.name} />
        <h2>{card.name}</h2>
        <p>{card.product_type}</p>
        <p>{card.description}</p>
        <p>{card.brand}</p>
        <p>${card.price}</p>
        <p>Rating: {card.rating}</p>
      </li>
    )
  }
}

export default ProductInfo