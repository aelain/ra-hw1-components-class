import React from 'react';

export default class ShopItemClass extends React.Component {
  constructor(item) {
    super(item);

    this.brand = item.brand;
    this.title = item.title;
    this.description = item.description;
    this.descriptionFull = item.descriptionFull;
    this.price = item.price;
    this.currency = item.currency;
  }

  render() {
    return (
      <div className="main-content">
        <h2>{this.brand}</h2>
        <h1>{this.title}</h1>
        <h3>{this.description}</h3>
        <div className="description">
          {this.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{this.currency}{Number(this.price).toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
