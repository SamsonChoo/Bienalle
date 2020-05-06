import React from 'react';
import './Capacity.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Affordable from './Affordable';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 10,
    label: '10',
  },
];

function Capacity() {
  return (
    <Router>
      <div className='Capacity'>
        <Switch>
          <Route exact path='/capacity'>
            <div className='Header'>Welcome User #555 to Year 2050!</div>
            <div className='SubHeader'>
              How many people are there staying including yourself?
            </div>
            <div className='CapOptions'>
              <Slider
                defaultValue={4}
                aria-labelledby='discrete-slider-always'
                step={1}
                marks={marks}
                min={1}
                max={10}
                valueLabelDisplay='on'
              />
              <br></br>
              <br></br>
              <br></br>
              <Link to='/affordable'>Next</Link>
            </div>
          </Route>
          <Route exact path='/affordable'>
            {Affordable}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Capacity;
