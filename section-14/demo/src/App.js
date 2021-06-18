import React from 'react';
import './App.css';
import Item from './components/Item';

export default class App extends React.Component {
  state = {
    value: 'NGOC',
    lists: [1, 2, 3, 4, 5, 6]
  }

  changeInput(event) {
    this.setState({
      value: event.target.value
    });
  }

  renderCustomElement () {
    if (this.state.value === 'Item') {
      return <Item index="1" />;
    } else if (this.state.value === 'NGOC') {
      return <div>NgocDepZai</div>;
    } else {
      return <div>Me may</div>
    }
  }

  render() {
    return <div className="container">
      <h1>The value of the input is {this.state.value}</h1>
      <input
        value={this.state.value}
        onChange={(event) => this.changeInput(event)}
        placeholder="Enter value"
      ></input>

      { this.renderCustomElement() }

    </div>;
  }
}
