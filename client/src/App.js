import React, { Component } from 'react';
import './App.css';
import Reader from './Reader';
import TempTable from './TempTable';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Reader />
          //this title has been approved by no-one
          <div class="container">
            <div class="container-fluid bg-success">
              <h1>Italian Resteraunt Mergerator!</h1>
            </div>

            <div class="container bg-dark">
              <h2>I should render things here</h2>
              <TempTable />
            </div>

            <div class="actionDiv">
              <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
            </div>
          </div>
      </div>
    );
  }
}
export default App;
