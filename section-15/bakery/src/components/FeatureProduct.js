import React from 'react';
import ProductItem from './ProductItem';
import './style.css';

export default class FeatureProduct extends React.Component {
  render () {
    return <div className="feature-product">
      <h3>Featured Products</h3>
      <div className="product-container">
        {
          this.props.products.length ?
            this.props.products.map(product => <ProductItem product={product} key={product._id}/>)
            : <h5>NO PRODUCTS</h5>
        }
      </div>
    </div>;
  }
}