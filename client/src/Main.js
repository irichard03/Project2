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
      page: "start"
    }
  }


  callbackStateChanger = (callbackState) => {
    this.setState({page: callbackState });
  }

  displayPage = () => {
    if (this.state.page === "start") {
      return (
        <Jumbotron>
          <h1 className="display-3">Desolate Headlands</h1>
          <p className="lead">Data merging simplified</p>
          <hr className="my-2" />
          <p>Import, define and merge your data.</p>
          <p className="lead">
          <button color="primary" onClick={() => this.setState({page: "signUp"})}>Get Started</button>
          </p>
        </Jumbotron>
      );
    }
    else if(this.state.page === "signUp" ) {
      return(
      <Jumbotron>
        <Signup callbackFromParent={this.callbackStateChanger}/>
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