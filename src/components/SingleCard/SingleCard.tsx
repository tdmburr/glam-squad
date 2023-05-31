import data from '../../mockData.js'
import './SingleCard.css'
import CardsContainer from '../CardsContainer/CardsContainer.js'
import { IProduct } from '../../utilities.js'

const SingleCard: React.FC<IProduct> = (Props) => {

  return (
    <div className='product-card'>
        <h2>{Props.name}</h2>
        <p>Price: ${Props.price}</p>
        <p>Rating: {Props.rating}</p>
        <p>Product: {Props.product_type}</p>
        <img className ='card-img'src={Props.image_link} alt=''/>
    </div>
  )
}
export default SingleCard