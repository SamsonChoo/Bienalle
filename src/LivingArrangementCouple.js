import React from 'react';
import './LivingArrangement.css';
import single from './icons/grey/Single.png';
import couple from './icons/CoupleWoChildren.png';
import singleparent from './icons/grey/SingleParentFamily.png';
import nuclear from './icons/grey/Nuclear.png';
import assisted from './icons/grey/Assisted.png';
import cohousing from './icons/grey/CoHousing.png';
import multigen from './icons/grey/MultiGenerational.png';
import PSingle from './LivingArrangementSingle';
import PSParent from './LivingArrangementSParent';
import PNuclear from './LivingArrangementNuclear';
import PAssist from './LivingArrangementAssisted';
import PCohouse from './LivingArrangementCohousing';
import PMult from './LivingArrangementMulti';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PAge from './AgeGroup';

function LivingArrangement() {
  return (
    <Router>
      <div className='Living Arrangement'>
        <Switch>
          <Route exact path='/living/couple'>
            <div className='Header'>Welcome User #555 to Year 2050!</div>
            <div className='SubHeader'>
              Choose your preferred living arrangement:
            </div>
            <div className='options'>
              <ul>
                Couple Without Children
                <li>
                  <Link to='/living/single'>
                    <img src={single}></img>
                  </Link>
                </li>
                <li>
                  <img src={couple}></img>
                </li>
                <li>
                  <Link to='/living/singleparent'>
                    <img src={singleparent}></img>
                  </Link>
                </li>
                <li>
                  <Link to='/living/nuclear'>
                    <img src={nuclear}></img>
                  </Link>
                </li>
                <li>
                  <Link to='/living/assisted'>
                    <img src={assisted}></img>
                  </Link>
                </li>
                <li>
                  <Link to='/living/cohousing'>
                    <img src={cohousing}></img>
                  </Link>
                </li>
                <li>
                  <Link to='/living/multigen'>
                    <img src={multigen}></img>
                  </Link>
                </li>
                <Link to='/age'>Next</Link>
              </ul>
            </div>
          </Route>
          <Route exact path='/living/single'>
            {PSingle}
          </Route>
          <Route exact path='/living/singleparent'>
            {PSParent}
          </Route>
          <Route exact path='/living/nuclear'>
            {PNuclear}
          </Route>
          <Route exact path='/living/assisted'>
            {PAssist}
          </Route>
          <Route exact path='/living/cohousing'>
            {PCohouse}
          </Route>
          <Route exact path='/living/multigen'>
            {PMult}
          </Route>
          <Route exact path='/age'>
            {PAge}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default LivingArrangement;
