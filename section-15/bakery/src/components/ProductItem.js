import React from 'react';
import config from '../config';
import './style.css';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { checkProductExists } from '../helpers';

const Component = class ProductItem extends React.Component {
  render () {
    return <div className="product-item">
      <img src={`${config.IMAGE_URL}${this.props.product.thumbnail}`}></img>
      <h4>{this.props.product.title}</h4>
      <p>{this.props.product.description}</p>

      {
        checkProductExists(this.props.cart.products, this.props.product) ?
        <Button type='danger' onClick={() => this.props.removeProduct(this.props.product._id)}>Remove</Button> :
        <Button type='primary' onClick={() => this.props.addProduct(this.props.product)}>Add to cart</Button>
      }
    </div>
  }
}

const mapState = (state) => ({
  cart: state.cart
})

const mapDispatch = (dispatch) => ({
  addProduct: dispatch.cart.addProduct,
  removeProduct: dispatch.cart.removeProduct
})

export default connect(
  mapState,
  mapDispatch
)(Component);