import React from 'react';
import ProductItem from './ProductItem';
import { Row, Col } from 'antd';
import './style.css';

export default class FeatureProduct extends React.Component {
  render () {
    return <div className="feature-product">
      <h3>{this.props.title}</h3>
      <div className="product-container">
        <Row gutter={60}>
          {
            this.props.products.length ?
              this.props.products.map(product => <Col lg={8} sm={12} xs={24} key={product._id}>
                <ProductItem product={product}/>
              </Col>)
              : <div className='no-product-container'>
                <h5 className='text-center'>NO PRODUCTS</h5>
              </div>
          }
        </Row>
      </div>
    </div>;
  }
}