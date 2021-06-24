import React from 'react';
import './style.css';

export default class Header extends React.Component {
  render() {
    return <header className="header">
      <img className="logo" src="logo.jpeg" />
      <nav className="navigator">
        <span>Menu</span>
        <span>Our story</span>
        <span>News & events</span>
      </nav>
    </header>;
  }
}