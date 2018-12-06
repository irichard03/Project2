import React, { Component } from 'react';
import './App.css';
import Reader from './Reader';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Reader />
      </div>
          //this title has been approved by noone
          <div class="container">
            <div class="container-fluid bg-success">
              <h1>Italian Resteraunt Mergerator!</h1>
            </div>

            <div class="container bg-dark">
              <h2>I should render things here</h2>
            </div>

            <div class="actionDiv">
              <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
            </div>
          </div>
    );
  }
}
export default App;
