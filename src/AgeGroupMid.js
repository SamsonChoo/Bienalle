import React from 'react';
import './LivingArrangement.css';
import youth from './icons/grey/Youth.png';
import midlife from './icons/MidLife.png';
import elderly from './icons/grey/Elderly.png';
import PYouth from './AgeGroupYouth';
import PEld from './AgeGroupEld';
import PCap from './Capacity';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function AgeGroup() {
  return (
    <Router>
      <div className='Age Group'>
        <Switch>
          <Route exact path='/age/midlife'>
            <div className='Header'>Welcome User #555 to Year 2050!</div>
            <div className='SubHeader'>What is your age group?</div>
            <div className='options'>
              <ul>
                Midlife (40-60)
                <li>
                  <Link to='/age/youth'>
                    <img src={youth}></img>
                  </Link>
                </li>
                <li>
                  <img src={midlife}></img>
                </li>
                <li>
                  <Link to='/age/elderly'>
                    <img src={elderly}></img>
                  </Link>
                </li>
                <Link to='/capacity'>Next</Link>
              </ul>
            </div>
          </Route>
          <Route exact path='/age/youth'>
            {PYouth}
          </Route>
          <Route exact path='/age/elderly'>
            {PEld}
          </Route>
          <Route exact path='/capacity'>
            {PCap}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AgeGroup;
