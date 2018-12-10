import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class Start extends Component {
  render() {
    return (
        <div>
            <h1 className="display-3">Desolate Headlands</h1>
            <p className="lead">Data merging simplified</p>
            <hr className="my-2" />
            <p>Import, define and merge your data.</p>
            <p className="lead">
            <button color="primary" onClick={() => this.setState({page: "signUp"})}>Get Started</button>
            </p>
        </div>
    );
  }
}
export default App;