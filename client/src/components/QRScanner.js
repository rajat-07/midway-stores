import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import ProductList from './ProductList';
import axios from 'axios';
const { products } = require("../productdata");
 
class QRScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      cart: []
    }
    this.handleScan = this.handleScan.bind(this)
  }
  addProduct(qc){
    let flag = true;
    this.state.cart.map(c => { 
        if(c.qrcode === qc){
            flag = false;
        }
    });
    if(flag){
        products.map(product => {
            if(qc === product.qrcode){
                this.state.cart.push(product);
            }
        });
    }
    console.log(this.state.cart);
  }
  handleScan(data){
    this.setState({
      result: data,
    });
    // console.log(data);
    if(data !== null){
    //   console.log(data);
      this.addProduct(this.state.result);
    }
  }

  handleError(err){
    console.error(err)
  }

//   componentDidMount = () => {
//     this.getBlogPost();
//   };

//   getBlogPost = () => {
//     axios.get('/api')
//       .then((response) => {
//         const data = response.data;
//         this.setState({ posts: data });
//         console.log('Data has been received!!');
//       })
//       .catch(() => {
//         alert('Error retrieving data!!!');
//       });
//   }

  handleSubmit(cart){
    const payload = {
      cart: cart
    };
    axios({
      url: 'api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        // this.resetUserInputs();
        // this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default QRScanner;