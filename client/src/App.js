import React, { Component } from 'react';
import './App.css';
import Reader from './components/Reader';
// import { Tooltip } from 'reactstrap';
import TempTable from './components/TempTable';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <div className="container">
            <div className="container-fluid bg-success">
              <h1>Database Mergeerator!</h1>
            </div>

            <div className="container bg-dark">
              <h2>I should render things here</h2>
              <TempTable />
            </div>
            <div className="container bg-primary">
              <Signup />
            </div>
            <div className="actionDiv">
              <button type="button" className="btn btn-primary btn-lg btn-block" >Get Started</button>
            </div>
          <Reader />
          </div>
      </div>
    );
  }
}
export default App;
