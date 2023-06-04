import React from 'react';
import './SingleCard.css';
import { IProduct } from '../../utilities.js';
import errorLogo from '../../Assets/error-img.png';
import { Link } from 'react-router-dom';

const SingleCard: React.FC<IProduct> = (Props) => {
  const noImage = <img className='no-card-img' src={errorLogo} alt='' />;
  const nullData = 'Not Available';

  return (
    <Link to={`/${Props.brand}/${Props.id}`}>
      <div className='product-card'>
        <h2 className='product-name'>{Props.name}</h2>
        <p className='product-price'>Price: ${Props.price}</p>
        {Props.rating === null ? (
          <span className='not-available'>
            Rating: <span className='error-message'>{nullData}</span>
          </span>
        ) : (
          <p className='product-rating'>Rating: {Props.rating}</p>
        )}
        <p className='product-type'>Product: {Props.product_type}</p>
        {Props.image_link === null ? (
          <div>{noImage}</div>
        ) : (
          <img className='card-img' src={Props.image_link} alt='' />
        )}
      </div>
    </Link>
  );
};

export default SingleCard;