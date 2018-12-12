import React from 'react';
import { Nav, NavItem, /*Dropdown, DropdownItem, DropdownToggle, DropdownMenu,*/ NavLink } from 'reactstrap';
import './App.css';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="align-center bg-warning footer">
        <Nav pills>
          <NavItem>
            <NavLink href="https://github.com/irichard03/Project2">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://reactjs.org/">Powered by React</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.heroku.com/">Hosted by Heroku</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}