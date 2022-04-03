import React from 'react'  ;
import axios from 'axios' ;
import { products } from './productdata' ;
import { users, addUser } from './utils/users'  ;
import uuid from 'react-uuid'  ;
import QrReader from 'react-qr-scanner'  ;
import ProductList from './components/ProductList'  ;
import Login from './components/Login'  ;
import DashBoard from './components/DashBoard'  ;
import styled from 'styled-components' ;
import Image from './components/Image';

import './App.css' ;

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      islogin: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    })  ;
  }

  handleSubmit(event){
    event.preventDefault()
    addUser(uuid(), this.state.username, this.state.email, this.state.password)
    console.log(users)
    this.setState({
      islogin: false,
    })
  }

  render() {

    console.log("hello");

    return(
      <div className="app">
        { this.state.islogin && 
        // <form onSubmit={this.handleSubmit}>
        //   <label>
        //     Username:
        //     <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        //   </label>
        //   <label>
        //     Password:
        //     <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        //   </label>
        //   <label>
        //     Email:
        //     <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        //   </label>
        //   <button type="submit">Submit</button>
        // </form> 
        <LoginWrapper>
        <div>
        <div className="limiter">
        <h1>Midway Store</h1>
        <div className="container-login100">
        <div className="wrap-login100">
        <Image/>
        {/* <div className="login100-form validate-form"></div> */}
        <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
        
        <div className="div_common">
        <span className="login100-form-title">
				<strong>Customer Sign Up</strong>
		</span>
   
    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
    <div className="wrap-input100 validate-input" >
						<input className="input100" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
        <div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
                    <div className="container-login100-form-btn">
						<button type="submit" className="login100-form-btn">
							Signup
						</button>
					</div><br/>
        {/* <div className="text-center p-t-136">
						<a className="txt2" href="#" onClick={props.signn} >
							Back
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div> */}
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </LoginWrapper>
        }
        { !this.state.islogin && <DashBoard users={users}/>}
      </div>
      
    )
  }
}

const LoginWrapper = styled.div`


@font-face {
  font-family: Poppins-Regular !important ;
  src: url('../fonts/poppins/Poppins-Regular.ttf') !important ; 
}

@font-face {
  font-family: Poppins-Bold !important ;
  src: url('../fonts/poppins/Poppins-Bold.ttf') !important ;
}

@font-face {
  font-family: Poppins-Medium !important ;
  src: url('../fonts/poppins/Poppins-Medium.ttf') !important ; 
}

@font-face {
  font-family: Montserrat-Bold !important ;
  src: url('../fonts/montserrat/Montserrat-Bold.ttf') !important ; 
}

* {
    margin: 0px !important ; 
    padding: 0px !important ; 
    box-sizing: border-box !important ;
}

body, html {
    height: 100% !important ;
    font-family: Poppins-Regular, sans-serif !important ;
    font-family: "Amazon Ember",Arial,sans-serif !important ;
}

a {
    font-family: Poppins-Regular !important ;
    font-size: 14px !important ;
    line-height: 1.7 !important ;
    color: #666666 !important ;
    margin: 0px !important ;
    transition: all 0.4s !important ;
    -webkit-transition: all 0.4s !important ;
  -o-transition: all 0.4s !important ;
  -moz-transition: all 0.4s !important ;
}

a:focus {
    outline: none !important !important ;
}

a:hover {
    text-decoration: none !important ;
  color: #57b846 !important ;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0px !important ;
}

p {
    font-family: Poppins-Regular !important ;
    font-size: 14px !important ;
    line-height: 1.7 !important ;
    color: #666666 !important ;
    margin: 0px !important ;
}

ul, li {
    margin: 0px !important ;
    list-style-type: none !important ;
}

input {
    outline: none !important ;
    border: none !important ;
}

textarea {
  outline: none !important ;
  border: none !important ;
}

textarea:focus, input:focus {
  border-color: transparent !important !important ;
}

input:focus::-webkit-input-placeholder { color:transparent !important ; }
input:focus:-moz-placeholder { color:transparent !important ; }
input:focus::-moz-placeholder { color:transparent !important ; }
input:focus:-ms-input-placeholder { color:transparent !important ; }

textarea:focus::-webkit-input-placeholder { color:transparent !important ; }
textarea:focus:-moz-placeholder { color:transparent !important ; }
textarea:focus::-moz-placeholder { color:transparent !important ; }
textarea:focus:-ms-input-placeholder { color:transparent !important ; }

input::-webkit-input-placeholder { color: #999999 !important ; }
input:-moz-placeholder { color: #999999 !important ; }
input::-moz-placeholder { color: #999999 !important ; }
input:-ms-input-placeholder { color: #999999 !important ; }

textarea::-webkit-input-placeholder { color: #999999 !important ; }
textarea:-moz-placeholder { color: #999999 !important ; }
textarea::-moz-placeholder { color: #999999 !important ; }
textarea:-ms-input-placeholder { color: #999999 !important ; }

button {
    outline: none !important !important ;
    border: none !important ;
    background: transparent !important ;
}

button:hover {
    cursor: pointer !important ;
}

iframe {
    border: none !important !important ;
}

.txt1 {
  font-family: Poppins-Regular !important ;
  font-size: 13px !important ;
  line-height: 1.5 !important ;
  color: #999999 !important ;
}

.txt2 {
  font-family: Poppins-Regular !important ;
  font-size: 13px !important ;
  line-height: 1.5 !important ;
  color: #666666 !important ;
}

.limiter {
  width: 100% !important ;
  margin: 0 auto !important ;
}

.container-login100 {
  width: 100% !important ;  
  min-height: 100vh !important ;
  display: -webkit-box !important ;
  display: -webkit-flex !important ;
  display: -moz-box !important ;
  display: -ms-flexbox !important ;
  display: flex !important ;
  flex-wrap: wrap !important ;
  justify-content: center !important ;
  align-items: center !important ;
  padding: 15px !important ;
  background: #9053c7 !important ;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0) !important ;
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0) !important ;
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0) !important ;
  background: linear-gradient(-135deg, #c850c0, #4158d0) !important ;
}

.wrap-login100 {
  width: 960px !important ;
  background: #fff !important ;
  border-radius: 10px !important ;
  overflow: hidden !important ;

  display: -webkit-box !important ;
  display: -webkit-flex !important ;
  display: -moz-box !important ;
  display: -ms-flexbox !important ;
  display: flex !important ;
  flex-wrap: wrap !important ;
  justify-content: space-between !important ;
  padding: 177px 130px 33px 95px !important ;
}

.login100-pic {
  width: 316px !important ;
}

.login100-pic img {
  max-width: 100% !important ;
}

.login100-form {
  width: 290px !important ;
}

.login100-form-title {
  font-family: Poppins-Bold !important ;
  font-size: 24px !important ;
  color: #333333 !important ;
  line-height: 1.2 !important ;
  text-align: center !important ;

  width: 100% !important ;
  display: block !important ;
  padding-bottom: 54px !important ;
}

.wrap-input100 {
  position: relative !important ;
  width: 100% !important ;
  z-index: 1 !important ;
  margin-bottom: 10px !important ;
}

.input100 {
  font-family: Poppins-Medium !important ;
  font-size: 15px !important ;
  line-height: 1.5 !important ;
  color: #666666 !important ;

  display: block !important ;
  width: 100% !important ;
  background: #e6e6e6 !important ;
  height: 50px !important ;
  border-radius: 25px !important ;
  padding: 0 30px 0 68px !important ;
}

.focus-input100 {
  display: block !important ;
  position: absolute !important ;
  border-radius: 25px !important ;
  bottom: 0 !important ;
  left: 0 !important ;
  z-index: -1 !important ;
  width: 100% !important ;
  height: 100% !important ;
  box-shadow: 0px 0px 0px 0px !important ;
  color: rgba(87,184,70, 0.8) !important ;
}

.input100:focus + .focus-input100 {
  -webkit-animation: anim-shadow 0.5s ease-in-out forwards !important ;
  animation: anim-shadow 0.5s ease-in-out forwards !important ;
}

@-webkit-keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px !important ;
    opacity: 0 !important ;
  }
}

@keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px !important ;
    opacity: 0 !important ;
  }
}

.symbol-input100 {
  font-size: 15px !important ;

  display: -webkit-box !important ;
  display: -webkit-flex !important ;
  display: -moz-box !important ;
  display: -ms-flexbox !important ;
  display: flex !important ;
  align-items: center !important ;
  position: absolute !important ;
  border-radius: 25px !important ;
  bottom: 0 !important ;
  left: 0 !important ;
  width: 100% !important ;
  height: 100% !important ;
  padding-left: 35px !important ;
  pointer-events: none !important ;
  color: #666666 !important ;

  -webkit-transition: all 0.4s !important ;
  -o-transition: all 0.4s !important ;
  -moz-transition: all 0.4s !important ;
  transition: all 0.4s !important ;
}

.input100:focus + .focus-input100 + .symbol-input100 {
  color: #57b846 !important ;
  padding-left: 28px !important ;
}

.container-login100-form-btn {
  width: 100% !important ;
  display: -webkit-box !important ;
  display: -webkit-flex !important ;
  display: -moz-box !important ;
  display: -ms-flexbox !important ;
  display: flex !important ;
  flex-wrap: wrap !important ;
  justify-content: center !important ;
  padding-top: 20px !important ;
}

.login100-form-btn {
  font-family: Montserrat-Bold !important ;
  font-size: 15px !important ;
  line-height: 1.5 !important ;
  color: #fff !important ;
  text-transform: uppercase !important ;

  width: 100% !important ;
  height: 50px !important ;
  border-radius: 25px !important ;
  background: #57b846 !important ;
  display: -webkit-box !important ;
  display: -webkit-flex !important ;
  display: -moz-box !important ;
  display: -ms-flexbox !important ;
  display: flex !important ;
  justify-content: center !important ;
  align-items: center !important ;
  padding: 0 25px !important ;

  -webkit-transition: all 0.4s !important ;
  -o-transition: all 0.4s !important ;
  -moz-transition: all 0.4s !important ;
  transition: all 0.4s !important ;
}

.login100-form-btn:hover {
  background: #333333 !important ;
}

@media (max-width: 992px) {
  .wrap-login100 {
    padding: 177px 90px 33px 85px !important ;
  }

  .login100-pic {
    width: 35% !important ;
  }

  .login100-form {
    width: 50% !important ;
  }
}

@media (max-width: 768px) {
  .wrap-login100 {
    padding: 100px 80px 33px 80px !important ;
  }

  .login100-pic {
    display: none !important ;
  }

  .login100-form {
    width: 100% !important ;
  }
}

@media (max-width: 576px) {
  .wrap-login100 {
    padding: 100px 15px 33px 15px !important ;
  }
}

.validate-input {
  position: relative !important ;
}

.alert-validate::before {
  content: attr(data-validate) !important ;
  position: absolute !important ;
  max-width: 70% !important ;
  background-color: white !important ;
  border: 1px solid #c80000 !important ;
  border-radius: 13px !important ;
  padding: 4px 25px 4px 10px !important ;
  top: 50% !important ;
  -webkit-transform: translateY(-50%) !important ;
  -moz-transform: translateY(-50%) !important ;
  -ms-transform: translateY(-50%) !important ;
  -o-transform: translateY(-50%) !important ;
  transform: translateY(-50%) !important ;
  right: 8px !important ;
  pointer-events: none !important ;

  font-family: Poppins-Medium !important ;
  color: #c80000 !important ;
  font-size: 13px !important ;
  line-height: 1.4 !important ;
  text-align: left !important ;

  visibility: hidden !important ;
  opacity: 0 !important ;

  -webkit-transition: opacity 0.4s !important ;
  -o-transition: opacity 0.4s !important ;
  -moz-transition: opacity 0.4s !important ;
  transition: opacity 0.4s !important ;
}

.alert-validate::after {
  content: "\f06a" !important ;
  font-family: FontAwesome !important ;
  display: block !important ;
  position: absolute !important ;
  color: #c80000 !important ;
  font-size: 15px !important ;
  top: 50% !important ;
  -webkit-transform: translateY(-50%) !important ;
  -moz-transform: translateY(-50%) !important ;
  -ms-transform: translateY(-50%) !important ;
  -o-transform: translateY(-50%) !important ;
  transform: translateY(-50%) !important ;
  right: 13px !important ;
}

.alert-validate:hover:before {
  visibility: visible !important ;
  opacity: 1 !important ;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible !important ;
    opacity: 1 !important ;
  }
}

`


export default App ;