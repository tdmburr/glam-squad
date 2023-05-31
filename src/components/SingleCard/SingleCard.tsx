import data from '../../mockData.js'
import './SingleCard.css'
import CardsContainer from '../CardsContainer/CardsContainer.js'
import { IProduct } from '../../utilities.js'

const SingleCard: React.FC<IProduct> = (Props) => {

  return (
    <div className='product-card'>
      <h2>Our Products</h2>
        <p>{Props.name}</p>
        <p>{Props.brand}</p>
        <p>{Props.price}</p>
        <p>{Props.rating}</p>
        <p>{Props.product_type}</p>
        <img src={Props.image_link} alt=''/>
    </div>
  )
}
export default SingleCard