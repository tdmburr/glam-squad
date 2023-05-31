import React from 'react'
import SingleCard from '../SingleCard/SingleCard' 
import './CardsContainer.css'
import { IProduct } from '../../utilities'
import App from '../App/App'

interface Props {
  allMakeUp: IProduct[];
}

const CardsContainer: React.FC<Props> = ({ allMakeUp }) => {
  console.log('YOOO',{ allMakeUp });

  const cards = allMakeUp.map((product) => (
      <div className='cards-container' key={product.id} >
       <h2>{product.name}</h2>
       <p>{product.brand}</p>
       <p>{product.price}</p>
       <p>{product.rating}</p>
       <p>{product.product_type}</p>
      </div>
  ));


  return (
    <div>
      {cards}
    </div>
  )
};


export default CardsContainer