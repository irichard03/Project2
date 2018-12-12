import React from 'react';
import './Style.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class HeaderSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headers: [] }
  }

  headerArray = ["dog", "cat", "20.00", '2018-12-11'];

  dynamicHeaderDisplay = (headers) => {
    {for(let i = 0; i < 3; i++){
      return(<div><h2>{i}</h2></div>);}
    }
    /**
    headers.map((element) => {
      return(  
        <div className="col-sm">
          <div className="row">
            <h2 className="bg-light">{element}</h2>
          </div>
          <div className="row">
            <Form>
              <FormGroup>
                <Label for="exampleSelect">Select Datatype</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Text</option>
                  <option>Money</option>
                  <option>Integer</option>
                  <option>Date</option>
                  <option>Boolean</option>
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>
      )
    });
     **/
  }

  render() {
    return (
      <div>
        <h2>Select datatype for your Headers</h2>
        <hr></hr>
        <div>
          {this.dynamicHeaderDisplay(this.headerArray)}
        </div>
        <Button>Continue</Button>
      </div>
    );
  }
}