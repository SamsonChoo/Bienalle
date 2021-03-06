import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PLivingArrangement from './LivingArrangement';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className='Header'>Future Hybrid Highrise Commune</div>
            <div className='SubHeader'>How Will We Live Together</div>
            <div className='Content'>
              <div className='TinyHeader'>
                participate as prospective tenants
              </div>
              <div className='IntroText'>
                In the launch of a high-rise commune, you will be able to
                express wishes regarding your own apartment, together with
                numerous other future neighbours. The wishes are based on a
                layout that allows numerous apartment sizes and life-styles to
                inhabit them. Having many parties involved though requires a
                moderation and negotiation process. Start your journey below!
              </div>
            </div>
            <Link to='/living'>
              <button class='button'>Begin</button>
            </Link>
          </Route>
          <Route exact path='/living'>
            {PLivingArrangement}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
