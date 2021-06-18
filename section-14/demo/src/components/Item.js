import React from 'react';
import './Item.css';

export default class Item extends React.Component {
  render() {
    return <div className="item">
      {this.props.index}. Shit on those kids
    </div>;
  }
}