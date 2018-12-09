//Component for navigation links to git repot, etc.
import React from 'react';
import { Progress } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Progress multi>
        <Progress bar color="warning" value="25"></Progress>
        <Progress bar color="warning" value="25"></Progress>
        <Progress bar color="warning" value="25"></Progress>
        <Progress bar color="warning" value="25"></Progress>
      </Progress>
    </div>
  );
};

export default Header;