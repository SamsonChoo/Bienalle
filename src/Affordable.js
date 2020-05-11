import React from 'react';
import './Capacity.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Room from './Room';

function Affordable() {
  return (
    <Router>
      <div className='Affordable'>
        <Switch>
          <Route exact path='/affordable'>
            <div className='Header'>Welcome User #555 to Year 2050!</div>
            <div className='SubHeader'>Do you want it affordable?</div>
            <div className='CapOptions'>
              <div>
                <Link to='/room'>
                  <Button variant='contained'>Yes</Button>
                </Link>
                <br />
                <br />
                <br />
                <Link to='/room'>
                  <Button variant='contained'>No</Button>
                </Link>
              </div>
            </div>
          </Route>
          <Route exact path='/room'>
            <Room />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Affordable;
