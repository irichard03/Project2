import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class getTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableName: ""
        }
    }



    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Select Number of Columns</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
            </Form>
        );
    }
}
