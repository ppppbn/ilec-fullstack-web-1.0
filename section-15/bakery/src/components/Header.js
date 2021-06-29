import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends React.Component {
  render() {
    return <header className="header">
      <Link to="/">
        <img className="logo" src="logo.jpeg" alt="Logo"/>
      </Link>
      <nav className="navigator">
        <span>Menu</span>
        <span>Our story</span>
        <span>News & events</span>
      </nav>
    </header>;
  }
}