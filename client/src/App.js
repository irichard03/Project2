import React, { Component } from 'react';
import './App.css';
import Reader from './Reader';
// import { Tooltip } from 'reactstrap';
import { Table } from 'reactstrap';
import TempTable from './TempTable';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Reader />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <div className="container-fluid bg-success">
          <h1>Italian Resteraunt Mergerator!</h1>
        </div>

        <div className="container bg-dark">
          <h2>I should render things here</h2>
        </div>

        <div className="actionDiv">
          <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
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
        </div>
      </div>
    );
  }
}
export default App;
