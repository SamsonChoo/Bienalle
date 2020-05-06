import React from 'react';
import './LivingArrangement.css';
import youth from './icons/Youth.png';
import midlife from './icons/MidLife.png';
import elderly from './icons/Elderly.png';
import PYouth from './AgeGroupYouth';
import PMid from './AgeGroupMid';
import PEld from './AgeGroupEld';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function AgeGroup() {
  return (
    <Router>
      <div className='Age Group'>
        <Switch>
          <Route exact path='/age/'>
            <div className='Header'>Welcome User #555 to Year 2050!</div>
            <div className='SubHeader'>What is your age group?</div>
            <div className='options'>
              <ul>
                <br></br>
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
                  <Link to='/age/elderly'>
                    <img src={elderly}></img>
                  </Link>
                </li>
                <br></br>
              </ul>
            </div>
          </Route>
          <Route exact path='/age/youth'>
            {PYouth}
          </Route>
          <Route exact path='/age/midlife'>
            {PMid}
          </Route>
          <Route exact path='/age/elderly'>
            {PEld}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AgeGroup;
