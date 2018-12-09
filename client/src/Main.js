//contains routes for displaying tables and dynamic page elements.
import React, { Component } from 'react';
import Signup from "./Signup";
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

//const Main = (props) => {

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    }
  }

  displayPage = () => {
    if (this.state.started === false) {
      return (
        <Jumbotron>
          <h1 className="display-3">Desolate Headlands</h1>
          <p className="lead">Data merging simplified</p>
          <hr className="my-2" />
          <p>Import, define and merge your data.</p>
          <p className="lead">
          <button color="primary" onClick={() => this.setState({started: true})}>Get Started</button>
          </p>
        </Jumbotron>
      );
    }
    else {
      return(
      <Jumbotron>
        <Signup />
      </Jumbotron>
      );
    }
  }
  
  render() {
    return (
      <div>
        {this.displayPage()}
      </div>
    );
  }
}

export default Main;