import React from 'react';
import './LivingArrangement.css';
import single from './icons/Single.png';
import couple from './icons/CoupleWoChildren.png';
import singleparent from './icons/SingleParentFamily.png';
import nuclear from './icons/Nuclear.png';
import assisted from './icons/Assisted.png';
import cohousing from './icons/CoHousing.png';
import multigen from './icons/MultiGenerational.png';

function LivingArrangement() {
  return (
    <div className="Living Arrangement">
      <div className="Header">
        Welcome User #555 to Year 2050!
      </div>
      <div className='SubHeader'>
        Choose your preferred living arrangement:
      </div>
      <div className='options'>
        <ul>
          <li><img src={single}></img></li>
          <li><img src={couple}></img></li>
          <li><img src={singleparent}></img></li>
          <li><img src={nuclear}></img></li>
          <li><img src={assisted}></img></li>
          <li><img src={cohousing}></img></li>
          <li><img src={multigen}></img></li>
        </ul>
      </div>
    </div>
  );
}

export default LivingArrangement;
