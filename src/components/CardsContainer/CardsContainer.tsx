import React from 'react'
import SingleCard from '../SingleCard/SingleCard' 
import './CardsContainer.css'
import { IProduct } from '../../utilities'

interface Props {
  allMakeUp: IProduct[];
}

const CardsContainer: React.FC<Props> = ({ allMakeUp }) => {
  const cards = allMakeUp.map((product) => {
    return (
      <SingleCard
        id = {product.id}
        name = {product.name}
        brand = {product.brand}
        price = {product.price}
        rating = {product.rating}
        product_type = {product.product_type}
        description = {product.description}
        image_link= {product.image_link || null}
        key = {product.id}
      />
  )});


  return (
    <div  className='cards-container' >
      {cards}
      {/* <Error error=''/> */}
    </div>
  )
};


export default CardsContainer