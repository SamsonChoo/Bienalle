import React from 'react';
import './LivingArrangement.css';
import single from './icons/Single.png';
import couple from './icons/CoupleWoChildren.png';
import singleparent from './icons/SingleParentFamily.png';
import nuclear from './icons/Nuclear.png';
import assisted from './icons/Assisted.png';
import cohousing from './icons/CoHousing.png';
import multigen from './icons/MultiGenerational.png';
import PSingle from './LivingArrangementSingle'
import PCouple from './LivingArrangementCouple'
import PSParent from './LivingArrangementSParent'
import PNuclear from './LivingArrangementNuclear'
import PAssist from './LivingArrangementAssisted'
import PCohouse from './LivingArrangementCohousing'
import PMult from './LivingArrangementMulti'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function LivingArrangement() {
  return (
    <Router>
      <div className="Living Arrangement">
        <div className="Header">
          Welcome User #555 to Year 2050!
        </div>
        <div className='SubHeader'>
          Choose your preferred living arrangement:
        </div>
        <div className='options'>
          <ul>
            <br></br>
            <li><Link to='/single'><img src={single}></img></Link></li>
            <li><Link to='/couple'><img src={couple}></img></Link></li>
            <li><Link to='/singleparent'><img src={singleparent}></img></Link></li>
            <li><Link to='/nuclear'><img src={nuclear}></img></Link></li>
            <li><Link to='/assisted'><img src={assisted}></img></Link></li>
            <li><Link to='/cohousing'><img src={cohousing}></img></Link></li>
            <li><Link to='/multigen'><img src={multigen}></img></Link></li>
            <br></br>
          </ul>
        </div>
        <Switch>
          <Route exact path="/single">
            {PSingle}
          </Route>
          <Route exact path="/couple">
            {PCouple}
          </Route>
          <Route exact path="/singleparent">
            {PSParent}
          </Route>
          <Route exact path="/nuclear">
            {PNuclear}
          </Route>
          <Route exact path="/assisted">
            {PAssist}
          </Route>
          <Route exact path="/cohousing">
            {PCohouse}
          </Route>
          <Route exact path="/multigen">
            {PMult}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default LivingArrangement;
