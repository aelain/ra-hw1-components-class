import React from 'react';
import './App.css';
import ShopItemClass from './components/ShopItemClass';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass />
      </div>
    </div>
    );
  }
}
