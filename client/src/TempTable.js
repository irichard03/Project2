import React, { Component } from 'react';
import './Style.css';
import axios from 'axios';

export default class TempTable extends React.Component {
  state = {
    tableData: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/menu/`)
      .then(res => {
        const tableData = res.data;
        this.setState({ tableData });
        alert('This happened');
        console.log(tableData);
      })
  }
  //renders table, array of objects, need to push to a header array, render that, then render table.
  render() {
    return (
      <table>
        <tbody>
            { this.state.tableData.map(tableData => <tr><td>{tableData.dish}</td>
                <td>{tableData.dishType}</td><td>{tableData.dishCost}</td><td>{tableData.dishPrice}</td>
                <td>{tableData.alcohol}</td><td>{tableData.createdAt}</td><td>{tableData.updatedAt}</td></tr>)}
        </tbody>
      </table>
    )
  }
}