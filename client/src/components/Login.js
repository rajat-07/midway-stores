import React from 'react';
import { users, addUser } from '../utils/users';
import uuid from 'react-uuid';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
    
      handleSubmit(event){
        event.preventDefault();
        addUser(uuid(), this.state.username, this.state.email, this.state.password);
        console.log(users);
        localStorage.setItem('username', this.state.username);
      }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        )
    }
}

export default Login;

