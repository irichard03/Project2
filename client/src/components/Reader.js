import Dropzone from 'react-dropzone'
import React, { Component } from 'react';
import './Style.css';
import axios from 'axios';

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] }
  }

  onDrop = (files, rejected) => {
    console.log(this.props);
    // console.log(files);
    const newTableName = this.props.tableName;
    const reader = new FileReader();
    reader.onload = function (e) {
      const csv = reader.result.replace(/"/g, "");
      const lines = csv.split("\n");
      const result = [];
      const headers = lines[0].split(";");
      const headerLength = headers.length;
      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(";");
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }

      console.log(result);
      axios.post(`/csv`, {
        result: result,
        name: newTableName
      })
        .then((response) => {
          console.log(response);
        });
    }
    const blobFile = new Blob(files);
    reader.readAsBinaryString(blobFile);
  }


  onCancel() {
    this.setState({
      files: []
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            onFileDialogCancel={this.onCancel.bind(this)}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}