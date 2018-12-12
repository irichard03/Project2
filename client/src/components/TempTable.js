import React, { Component } from 'react';
import './Style.css';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class TempTable extends Component {
  state = {
    tableData: []
  }

  componentDidMount=() => {
    let table = this.props.tableName.toLowerCase();
    axios.get(`http://localhost:3000/show/${table}/`, )
      .then(res => {
        const tableData = res.data;
        this.setState({ tableData });
        // alert('This happened');
        console.log(tableData);
      })
  }
  //renders table, array of objects, need to push to a header array, render that, then render table.
  render() {
    return (
      <div>
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
        <table>
          <tbody>
            {this.state.tableData.map(tableData => <tr><td>{tableData.dish}</td>
              <td>{tableData.dishType}</td><td>{tableData.dishCost}</td><td>{tableData.dishPrice}</td>
              <td>{tableData.alcohol}</td><td>{tableData.createdAt}</td><td>{tableData.updatedAt}</td></tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}