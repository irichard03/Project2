import React from 'react';
import Columns from './Columns';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class newTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 1
        }
    }
    handleColNum(e){
        this.setState({colNum: e.target.value});
        this.generateCols(e.target.value);
    }

    generateCols(num){
        for (let i = 0;i<num;i++){
            return <Columns />
        }
    }
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Select Number of Columns</Label>
                    <Input type="select" name="select" id="exampleSelect" value = {this.state.colNum} onChange = {() => this.handleColNum}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <button color="primary" onClick={() => this.setState({progress: 2})}>Next Step</button>
                </FormGroup>
                
            </Form>
        );
    }
}
