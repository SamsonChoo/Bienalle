import React from 'react';
import './LivingArrangement.css';
import youth from './icons/grey/Youth.png';
import midlife from './icons/grey/MidLife.png';
import elderly from './icons/Elderly.png';
import PYouth from './AgeGroupYouth';
import PMid from './AgeGroupMid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function AgeGroup() {
  return (
    <Router>
      <div className='Age Group'>
        <Switch>
          <Route exact path='/age/elderly'>
            <div className='Header'>Welcome User #555 to Year 2050!</div>
            <div className='SubHeader'>What is your age group?</div>
            <div className='options'>
              <ul>
                Elderly (>60)
                <li>
                  <Link to='/age/youth'>
                    <img src={youth}></img>
                  </Link>
                </li>
                <li>
                  <Link to='/age/midlife'>
                    <img src={midlife}></img>
                  </Link>
                </li>
                <li>
                  <img src={elderly}></img>
                </li>
                Next
              </ul>
            </div>
          </Route>
          <Route exact path='/age/youth'>
            {PYouth}
          </Route>
          <Route exact path='/age/midlife'>
            {PMid}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AgeGroup;
