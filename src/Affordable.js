import React from 'react';
import './Capacity.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from './CButton';

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
                <Button></Button>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Affordable;
