import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
            isedit: false,
            qty: 1
        };
      }

      handleChange(event){
          this.setState({
              [event.target.name] : event.target.value
          })
        //   console.log(event);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        // this.postProducts();
        // console.log(event.target.name);
        this.setState({isedit: false});
      }

      handleEdit(){
        this.setState({isedit: true});  
      }

      handlePrice(){
        const { price} = this.props.product;
        //   console.log(parseInt(price, 10)*parseInt(this.state.qty, 10));
          return (parseInt(price, 10)*parseInt(this.state.qty, 10));
      }
    
  render() {
    const { id, name, img, price, quantity } = this.props.product;
    const isedit=this.state.isedit;
    let edited;
    if(isedit){
        edited=<div>
        <input type="number" placeholder="Enter new quantity" />
        <button >Submit</button>
      </div>;
    }
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          {isedit && <div className="card">
          <a href="#" class="close-icon"></a>
          <div className="img-container p-5" onClick={() => console.log('details')}>
            {/* <Link to="/details"> */}
              <img src={img} alt="product" className="card-img-top" />
            {/* </Link> */}
          </div>
          <div
            className="card-footer"
            style={{ display: 'flex !important', justifyContent: 'space-between', flexDirection: 'column' }}
          >
            <div style={{ margin: '15px' }}>
              <p className="align-self-center mb-0 cardtext">{name}</p>
            </div>
            <div style={{ margin: '15px' }}>
              <p className="text-blue font-italic mb-0 cardtext">Rate : {price}</p>
            </div>
            <div style={{ margin: '15px' }}>
              {/* <p className="text-blue font-italic mb-0 cardtext">Quantity : {quantity}</p> */}
              <form onSubmit={this.handleSubmit}>
                <label> Quantity : </label>
                <input type="number" name="qty" onChange={this.handleChange} placeholder="Enter quantity" />
                <button type="submit">Edit</button>
              </form>
            </div>
            <div style={{ margin: '15px' }}>
              <p className="text-blue font-italic mb-0 cardtext">Price : ---</p>
            </div>
            <div style={{ marginLeft: '50px' }}>
                <button style={{ borderRadius:'10px' ,fontSize:'15px', backgroundColor: '#8c54c7', color:'white'}}>Edit<i style={{ padding: '10px' }} class="fa fa-edit"></i></button>
            </div>
            {/* <div>
              <p style={{ textAlign: 'center' }}>Our Analysis: </p>
              <p style={{ textAlign: 'center', textDecoration: 'bold', color: color }}>{sentiment}</p>
            </div> */}
          </div>
        </div>}
          {!isedit &&  <div className="card">
          <a href="#" class="close-icon"></a>
          <div className="img-container p-5" onClick={() => console.log('details')}>
            {/* <Link to="/details"> */}
              <img src={img} alt="product" className="card-img-top" />
            {/* </Link> */}
          </div>
          <div
            className="card-footer"
            style={{ display: 'flex !important', justifyContent: 'space-between', flexDirection: 'column' }}
          >
            <div style={{ margin: '15px' }}>
              <p className="align-self-center mb-0 cardtext">{name}</p>
            </div>
            <div style={{ margin: '15px' }}>
              <p className="text-blue font-italic mb-0 cardtext">Rate: {price}</p>
            </div>
            <div style={{ margin: '15px' }}>
              <p className="text-blue font-italic mb-0 cardtext">Quantity : {this.state.qty}</p>
            </div>
            <div style={{ margin: '15px' }}>
        <p className="text-blue font-italic mb-0 cardtext">Price : {this.handlePrice()}</p>
            </div>
            <div style={{ marginLeft: '50px' }}>
                <button onClick={this.handleEdit} style={{ borderRadius:'10px' ,fontSize:'15px', backgroundColor: '#8c54c7', color:'white'}}>Edit<i style={{ padding: '10px' }} class="fa fa-edit"></i></button>
            </div>
            {/* <div>
              <p style={{ textAlign: 'center' }}>Our Analysis: </p>
              <p style={{ textAlign: 'center', textDecoration: 'bold', color: color }}>{sentiment}</p>
            </div> */}
          </div>
        </div>}
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    qrcode: PropTypes.string
  }).isRequired
};

const ProductWrapper = styled.div`
  .card-body {
    border-color: transparent;
    transition: all 1s linear;
    width: 1000px;
    height: 50px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .close-icon
  {
    display:block;
    box-sizing:border-box;
    width:20px;
    height:20px;
    border-width:3px;
    border-style: solid;
    border-color:red;
    border-radius:100%;
    background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, white 46%,  white 56%,transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white 46%,  white 56%,transparent 56%, transparent 100%);
    background-color:red;
    box-shadow:0px 0px 5px 2px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
  }
`;

export default Product;