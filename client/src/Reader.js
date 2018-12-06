import CSVReader from "react-csv-reader";
import React, { Component } from 'react';
import './Style.css';

const handleForce = data => {
  console.log(data);
};

class Reader extends Component {
  render() {
    return (
      <div className="container">
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV with secret Death Star statistics"
          onFileLoaded={handleForce}
        />
        <p>and then open the console</p>
      </div>
    );
  }
}

export default Reader;