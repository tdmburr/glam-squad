import data from '../../mockData.js'
import './SingleCard.css'
import CardsContainer from '../CardsContainer/CardsContainer.js'
import { IProduct } from '../../utilities.js'
import errorLogo from '../../Assets/error-img.png'
import Error from '../Error/Error'

interface IError {
  error: string
}

const SingleCard: React.FC<IProduct> = (Props) => {
const noImage = <img className='no-card-img' src={errorLogo} alt=''/> 
const nullData = 'No data available'
  return (
    <div className='product-card'>
        <h2>{Props.name}</h2>
        <p>Price: ${Props.price}</p>
        {Props.rating === null ? <p>Rating:<Error error={nullData}/></p>:
        <p>Rating: {Props.rating}</p>}
        <p>Product: {Props.product_type}</p>
        {Props.image_link === null ? <div>{noImage}</div> : 
        <img className ='card-img'src={Props.image_link} alt=''/> }
    </div>
  )
}
export default SingleCard