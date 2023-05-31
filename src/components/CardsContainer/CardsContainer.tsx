import React from 'react'
import SingleCard from '../SingleCard/SingleCard' 
import './CardsContainer.css'
import { IProduct } from '../../utilities'
import App from '../App/App'

interface Props {
  allMakeUp: IProduct[];
}

const CardsContainer: React.FC<Props> = ({ allMakeUp }) => {
  console.log({ allMakeUp });

  const cards = allMakeUp.map((product: IProduct ) => (
      <div className='cards-container' key={product.id} >
       <h2>Hello World</h2>
      </div>
  ));


  return (
    <div>
      {cards}
    </div>
  )
};


export default CardsContainer