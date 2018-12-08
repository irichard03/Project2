import React, { Component } from 'react';
import './Style.css';

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
        alert(this.state);
    }
    //where my jsx goes 
    render(){
        return(
            <form>
                <input placeholder='First' value={this.state.firstName}
                onChange={event => this.setState({firstName: event.target.value})} />
                <input placeholder='Last' value={this.state.lastName}
                onChange={event => this.setState({firstName: event.target.value})} />
                <input placeholder='userName' value={this.state.userName}
                onChange={event => this.setState({firstName: event.target.value})} />
                <input placeholder='email' value={this.state.email}
                onChange={event => this.setState({firstName: event.target.value})} />
                <input placeholder='password' value={this.state.password} type='password'
                onChange={event => this.setState({firstName: event.target.value})} />
                <button onCLick={event => this.onSubmit(event)}>Submit</button>
            </form>
        );
        
    }
}