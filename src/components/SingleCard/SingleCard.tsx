import data from '../../mockData.js'
import './SingleCard.css'
import CardsContainer from '../CardsContainer/CardsContainer.js'
import { IProduct } from '../../utilities.js'

interface Props {
  allMakeUp: IProduct[];
}


const SingleCard: React.FC<Props> = () => {
  
  return (
    <h2>console.log('help')</h2>
  )
}

export default SingleCard