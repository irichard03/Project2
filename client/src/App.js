import React, { Component } from 'react';
import './App.css';
import Reader from './Reader';
import TempTable from './TempTable';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Reader />
          
          <div class="container">
            <div class="container-fluid bg-success">
              <h1>Database Mergeerator!</h1>
            </div>

            <div class="container bg-dark">
              <h2>I should render things here</h2>
              <TempTable />
            </div>
            <div class="container bg-primary">
              <Signup />
            </div>
            <div class="actionDiv">
              <button type="button" class="btn btn-primary btn-lg btn-block" >Get Started</button>
            </div>
          </div>
      </div>
    );
  }
}
export default App;
