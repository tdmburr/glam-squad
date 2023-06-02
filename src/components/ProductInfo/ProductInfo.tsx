import React from 'react'
import SingleCard from '../SingleCard/SingleCard' 
import './CardsContainer.css'
import { IProduct } from '../../utilities'
import App from '../App/App'

interface Props {
  name: string;
  brand: string;
  price: string;
  rating: number | null;
  product_type: string;
  description: string;
  image_link: string | null;
}

const ProductInfo: React.FC<Props> = ({ name, brand, price, rating, product_type, description, image_link }) => {
  const noImage = <p>No image available</p>
  const nullData = 'No data available'
  return (
    <div className='product-info'>
      {image_link ? <img className='product-info-img' src={image_link} alt='' /> : noImage }
      <h2> {name}</h2>
      <p> {brand}</p>
      <p>$ {price}</p>
      {rating === null ? <p>Rating: {nullData}</p> : <p>Rating: {rating}</p> }
      <p>Product Type: {product_type}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default ProductInfo


