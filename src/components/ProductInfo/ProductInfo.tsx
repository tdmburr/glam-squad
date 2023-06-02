import React, { Component } from "react";
import SingleCard from "../SingleCard/SingleCard";
// import './CardsContainer.css'
import { IProduct } from "../../utilities";
import App from "../App/App";
import acquireInfo from "../../apiCalls";

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
      <div className="product-info">
        {image_link ? (
          <img className="product-info-img" src={image_link} alt="" />
        ) : (
          noImage
        )}
        <h2> {name}</h2>
        <p> {brand}</p>
        <p>$ {price}</p>
        {rating === null ? <p>Rating: {nullData}</p> : <p>Rating: {rating}</p>}
        <p>Product Type: {product_type}</p>
        <p>Description: {description}</p>
      </div>
    );
  }
}

export default ProductInfo;
