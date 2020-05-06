import React from 'react';
import './AgeGroup.css';
import youth from './icons/Youth.png';
import midlife from './icons/grey/MidLife.png';
import elderly from './icons/grey/Elderly.png';
import PMid from './AgeGroupMid'
import PEld from './AgeGroupEld'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function AgeGroup() {
  return (
    <Router>
      <div className="Living Arrangement">
        <div className="Header">
          Welcome User #555 to Year 2050!
        </div>
        <div className='SubHeader'>
          What is your age group?
        </div>
        <div className='options'>
          <ul>
            Youth (&lt;40)
            <li><img src={youth}></img></li>
            <li><Link to='/midlife'><img src={midlife}></img></Link></li>
            <li><Link to='/elderly'><img src={elderly}></img></Link></li>
            Next
          </ul>
        </div>
        <Switch>
          <Route exact path="/midlife">
            {PMid}
          </Route>
          <Route exact path="/elderly">
            {PEld}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AgeGroup;
