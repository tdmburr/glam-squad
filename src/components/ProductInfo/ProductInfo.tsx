import React, { Component } from "react";
import SingleCard from "../SingleCard/SingleCard";
// import './CardsContainer.css'
import { IProduct } from "../../utilities";
import App from "../App/App";
import acquireInfo from "../../apiCalls";
import "./ProductInfo.css"

interface Props {
  id: string,
  brand: string,
}

interface State {
  productData: any
}

// We could do a fetch call in ProductInfo

export class ProductInfo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      productData: {},
    };
  }

  componentDidMount() {
    acquireInfo(this.props.brand).then((data: IProduct[]) => {
     const matchingProduct = data.find(product => product.id === Number(this.props.id))
     this.setState({productData: matchingProduct})
    });
  }

  render() {
    const noImage = <p>No image available</p>;
    const nullData = "No data available";
    const {
      name,
      brand,
      price,
      rating,
      product_type,
      description,
      image_link,
    } = this.state.productData;
    return (
      <div className="product-info-container">
        <div>
        {image_link ? (
          <img className="product-info-img" src={image_link} alt="" />
        ) : (
          noImage
        )}
        </div>
        <div>
          <h2 className="product-name"> {name}</h2>
          <p className="product-info">Brand: {brand}</p>
          <p className="product-info">Price: $ {price}</p>
          {rating === null ? <p className="product-info">Rating: {nullData}</p> : <p className="product-info">Rating: {rating}</p>}
          <p className="product-info">Product Type: {product_type}</p>
          <p className="product-info">{description}</p>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
