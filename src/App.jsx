import React from 'react';
import './App.css';
import ShopItemClass from './components/ShopItemClass';
import Item from './classes/Item';

export default class App extends React.Component {
  constructor() {
    super();
    this.item = new Item(
      'Tiger of Sweden',
      'Leonard coat',
      'Minimalistic coat in cotton-blend',
      'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      399,
      '£'
    )
  }

  render() {
    if (this.item instanceof Item) {
      return (
        <div className="container">
          <div className="background-element">
          </div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            <ShopItemClass {...this.item} />
          </div>
        </div>
      );
    }
  }
}
