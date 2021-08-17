import React, { Component } from 'react';

import Product from './Product';
import products from '../../data/products.json'
import ShelfHeader from './ShelfHeader';
import Clearfix from '../Clearfix';


class Shelf extends Component {

  render() {
    const productlst = products.products;
     const p = productlst.map(product => {
     return (
     <Product
     product={product}
        />
    );
   });

    return (
      <React.Fragment>

        <div className="shelf-container">
          <ShelfHeader productsLength={products.length}/>
           {p}
          <Clearfix />
        </div>
        <Clearfix />
      </React.Fragment>
    )
  }
}


export default Shelf;
