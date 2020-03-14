import React, { Component } from 'react';
import Product from './Product';
// import styled from 'styled-components';

class ProductList extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     totalPrice: 0
  //   }
  //   this.handlePrice = this.handlePrice.bind(this);
  // }

  // handlePrice(){
  //   let arr = this.props.carts;
  //   on
  // }

  render() {
    let carts = this.props.carts;
    return (
      <React.Fragment>
        <div className="py-5 expdiv">
          <div className="container">
            <div className="row">
                {carts.map(cart => {
                    return <Product key={cart.id} product={cart} />;
                })};
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;