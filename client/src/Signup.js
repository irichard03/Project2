import React, { Component } from 'react';
import './Style.css';
import axios from 'axios';

//state holds form data
export default class Signup extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

            axios.post(`http://localhost:3000/adduser`, {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
            .then( (response) => {
                console.log(response);
              });


    }
    //where my jsx goes 
    render(){
        return(
            <form>
                <input placeholder='First' value={this.state.firstName}
                onChange={event => this.setState({firstName: event.target.value})} />
                <input placeholder='Last' value={this.state.lastName}
                onChange={event => this.setState({lastName: event.target.value})} />
                <input placeholder='userName' value={this.state.userName}
                onChange={event => this.setState({userName: event.target.value})} />
                <input placeholder='email' value={this.state.email}
                onChange={event => this.setState({email: event.target.value})} />
                <input placeholder='password' value={this.state.password} type='password'
                onChange={event => this.setState({password: event.target.value})} />
                <button onClick={event => this.onSubmit(event)}>Submit</button>
            </form>
        );
    }
}