import React from 'react';
import { products } from '../productdata';
import axios from 'axios';
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';
import ProductList from './ProductList';
import Navbar from './Navbar';

class DashBoard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          username: '',
          password: '',
          delay: 100,
          result: 'No result',
          user: {},
          totalPrice: 0,
          cart: []
        }
        this.handleScan = this.handleScan.bind(this);
        this.handleTotalPrice = this.handleTotalPrice.bind(this);
      }
    
      componentWillMount = () => {
        this.getProducts();
        this.handleTotalPrice();
      };
    
    
      getProducts = () => {
        axios.get('/api')
          .then((response) => {
            const data = response.data;
            console.log('Data ', data);
            data.map(d => {
                let temp = localStorage.getItem('please');
                if(d.username == temp){
                    this.setState({ cart: d.cart });
                }
                // this.state.totalPrice = this.state.totalPrice + parseInt(d.price, 10);
                // console.log("dpric", parseInt(d.price, 10));
            })
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
    
      submit = (user) => (event) => {
        event.preventDefault();
    
        const payload = {
          username: user.username,
          password: user.password,
          email: user.email,
          cart: this.state.cart,
        };
    
        axios({
          url: '/api/save',
          method: 'POST',
          data: payload
        })
          .then(() => {
            console.log('Data has been sent to the server');
            this.getProducts();
          })
          .catch(() => {
            console.log('Internal server error');
          });;

        this.state.cart.map(c => {
            console.log(parseInt(c.price, 10));
            this.state.totalPrice = this.state.totalPrice + parseInt(c.price, 10);
        })
      };
    
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
          console.log(data);
          this.addProduct(this.state.result);
        }
      }
    
      handleError(err){
        console.error(err)
      }

      handleTotalPrice(){
          this.state.cart.map(c => {
              console.log(parseInt(c.price, 10));
              this.state.totalPrice = this.state.totalPrice + parseInt(c.price, 10);
          })
      }

    render(){
        let user = this.props.users[0];
        localStorage.setItem("please", user.username);
        const previewStyle = {
            height: 400,
            width: 350
        }
        let container;
        if(this.state.totalPrice){
            container = <div className="invoice"><h2 className="totalPrice">Total Price - {this.state.totalPrice}</h2></div>
        }

        return(
            <DashBoardWrapper>
            <div>
                <Navbar />
                <div className="cartdiv">
                    <ProductList carts={this.state.cart} />
                </div>
                <QrReader
                    className="qr-scanner"
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <button style={{ borderRadius:'10px' ,fontSize:'15px', backgroundColor: '#8c54c7', color:'white'}} className="submit-btn" onClick={this.submit(user)}>
                    Submit
                </button>
                { container }
            </div>
            </DashBoardWrapper>
        )
    }
}

const DashBoardWrapper =  styled.div`
.qr-scanner{
  object-fit: contain;
}
.submit-btn{
  borderRadius:'10px';
  fontSize:'15px';
  backgroundColor: '#8c54c7';
  color:'white'
}
.totalPrice{
  padding: 40px;
}
`


export default DashBoard;