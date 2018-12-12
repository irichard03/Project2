import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class GetTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tableName: ""
        }
    }
  
    upperCasererAtor = (event) => {
        event.preventDefault();
        let modifiedName = this.state.tableName.toLowerCase();
        let firstLetter = modifiedName.charAt(0).toUpperCase();
        modifiedName = modifiedName.slice(1);
        modifiedName = firstLetter + modifiedName;
        
        this.props.callbackTableName(modifiedName);
        this.props.callbackFromParent("reader");
    }

    render() {
    return (
      <div>
        <p className="lead">Table Import</p>
            <hr className="my-2" />
            <p>Please enter the name for your table.</p>
        <Form>
          <FormGroup>
            <Input placeholder='Table Name' value={this.state.tableName} onChange={event => this.setState({tableName: event.target.value})} />
          </FormGroup>    
          <Button onClick={event => this.upperCasererAtor(event)}>Submit</Button>
        </Form>
      </div>
    );
  }
}
