import React from 'react';
import './LivingArrangement.css';
import youth from './icons/grey/Youth.png';
import midlife from './icons/MidLife.png';
import elderly from './icons/grey/Elderly.png';
import PYouth from './AgeGroupYouth'
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
      <div className="Age Group">
        <div className="Header">
          Welcome User #555 to Year 2050!
        </div>
        <div className='SubHeader'>
          What is your age group?
        </div>
        <div className='options'>
          <ul>
            Midlife (40-60)
            <li><Link to='/youth'><img src={youth}></img></Link></li>
            <li><img src={midlife}></img></li>
            <li><Link to='/elderly'><img src={elderly}></img></Link></li>
            Next
          </ul>
        </div>
        <Switch>
          <Route exact path="/youth">
            {PYouth}
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
