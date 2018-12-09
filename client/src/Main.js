//contains routes for displaying tables and dynamic page elements.
import React, { Component } from 'react';

import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

//const Main = (props) => {

class Main extends Component { 
render() {
    return (
        <div>
          <Jumbotron>
            <h1 className="display-3">Desolate Headlands</h1>
            <p className="lead">Data merging simplified</p>
            <hr className="my-2" />
            <p>Import, define and merge your data.</p>
            <p className="lead">
            
              <Link to='/Signup.js'>
                <Button color="primary">Get Started</Button>
              </Link>
            </p>
          </Jumbotron>
        </div>
      );
    }
//};
}

export default Main;