//contains routes for displaying tables and dynamic page elements.
import React, { Component } from 'react';
import Signup from "./components/Signup";
import Reader from "./components/Reader";
import TempTable from "./components/TempTable";
import GetTable from "./components/GetTable";
import HeaderSelect from "./components/HeaderSelect";
import { Jumbotron } from 'reactstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "start",
    }
  }

  tempTableName = "";
  
  //change page render
  callbackStateChanger = (callbackState) => {
    this.setState({page: callbackState });
  }
  //get table name from one component and pass it back to reader
  callbackTableName = (table) => {
    this.tempTableName = table;
  }
  //render page based on state
  displayPage = () => {
    if (this.state.page === "start") {
      return (
        <Jumbotron>
          <h1 className="display-3">Desolate Headlands</h1>
          <p className="lead">Data merging simplified</p>
          <hr className="my-2" />
          <p>Import, define and merge your data. </p>
          <p className="lead">
          <button color="primary" onClick={() => this.setState({page: "signUp"})}>Get Started</button>
          </p>
        </Jumbotron>
      );
    }
    else if(this.state.page === "signUp" ) {
      return(
      <Jumbotron>
        <Signup callbackFromParent={this.callbackStateChanger}/>
      </Jumbotron>
      );
    }
    else if(this.state.page === "getTable" ) {
      return(
      <Jumbotron>
        <GetTable callbackFromParent={this.callbackStateChanger} callbackTableName={this.callbackTableName}/>
      </Jumbotron>
      );
    }
   
    else if(this.state.page === "reader" ) {
      return(
      <Jumbotron>
        <Reader callbackFromParent={this.callbackStateChanger}  tableName={this.tempTableName}/>
      </Jumbotron>
      );
    }

    else if(this.state.page === "headerSelect" ) {
      return(
      <Jumbotron>
        <HeaderSelect callbackFromParent={this.callbackStateChanger} tableName={this.tempTableName}/>
      </Jumbotron>
      );
    }

     //Re-order these once reader works.
     else if(this.state.page === "tempTable" ) {
      return(
      <Jumbotron>
        <TempTable callbackFromParent={this.callbackStateChanger} tableName={this.tempTableName}/>
      </Jumbotron>
      );
    }

    
  }
  
  render() {
    return (
      <div>
        {this.displayPage()}
      </div>
    );
  }
}

export default Main;