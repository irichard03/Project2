import React from 'react';
import './Style.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class HeaderSelect extends React.Component {
  constructor(props) {
    super(props);
    const headerArray = ["dog", "cat", "20.00", '2018-12-11'];
    this.state = { headerArray }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Select datatype for your Headers</h2>
          <hr></hr>
      </div>
        <div>{this.state.headerArray.map((header,index) => (
              <div className="col-sm">
                <FormGroup>
                  <Label for="exampleSelect">{header}</Label>
                  <Input type="select" name="select" id="{header}">
                    <option>Text</option>
                    <option>Money</option>
                    <option>Integer</option>
                    <option>Date</option>
                    <option>Boolean</option>
                  </Input>
                </FormGroup>
              </div>
            ))
        }
        <Button>Continue</Button>
        </div>
          </div>);
  }
}
  
  
      
        
      