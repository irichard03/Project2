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
              <th>Animal</th>
              <th>Name</th>
              <th>Age</th>
              <th>Disposition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bobcat</td>
              <td>Bob</td>
              <td>6</td>
              <td>Ferocious</td>
            </tr>
            <tr>
              <td>Dog</td>
              <td>Rufus</td>
              <td>4</td>
              <td>Dumb</td>
            </tr>
            <tr>
              <td>Cat</td>
              <td>Belial</td>
              <td>6</td>
              <td>Posessed</td>
            </tr>
          {this.state.tableData.map((tuple, index) => (
            <h1>{tuple}</h1>
          ))}
          </tbody>
        </Table>
      </div>
    )
  }
}