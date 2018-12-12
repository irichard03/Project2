//Component for navigation links to git repot, etc.
import React from 'react';
import { Progress } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Progress multi>
        <Progress bar color="primary" value="20"></Progress>
        <Progress bar color="light" value="20"></Progress>
        <Progress bar color="secondary" value="20"></Progress>
        <Progress bar color="warning" value="20"></Progress>
        <Progress bar color="danger" value="20"></Progress>
      </Progress>
    </div>
  );
};

export default Header;