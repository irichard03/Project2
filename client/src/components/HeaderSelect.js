import React from 'react';
import './Style.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class HeaderSelect extends React.Component {
  constructor(props) {
    super(props);
    let headerArray = ["dog", "cat", "20.00", '2018-12-11'];  
    this.state = { headerArray }
  
  }
  onChange = () => {
    this.state.headerArray.push(this.state.value);
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.callbackFromParent("tempTable");
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
                <div className="row">
                <Form onSubmit={this.handleSubmit}>
                  <Label>
                   {header}
                    <Input type="select" name="select" value={this.state.value} onChange={this.handleChange}>
                      <option value="Text">Text</option>
                      <option value="Money">Money</option>
                      <option value="Integer">Integer</option>
                      <option value="Date">Date</option>
                      <option value="Boolean">Boolean</option>
                    </Input>
                  </Label>
                </Form>
                </div>
              </div>
            ))
        }
        <Button onClick={event => this.onSubmit(event)}>Continue</Button>
        </div>
          </div>);
  }
}
  
  
      
        
      