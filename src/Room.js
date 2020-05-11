import React from 'react';
import './Capacity.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: 0,
      shared: 0,
      study: 0,
      availableSelections: [0, 1, 2, 3, 4, 5, 6],
    };

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleChangeC = this.handleChangeC.bind(this);
  }

  handleChangeA(event) {
    this.setState({ single: parseInt(event.target.value) });
  }

  handleChangeB(event) {
    this.setState({ shared: parseInt(event.target.value) });
  }

  handleChangeC(event) {
    this.setState({ study: parseInt(event.target.value) });
  }

  render() {
    const { single, shared, study, availableSelections } = this.state;
    const optionsA = availableSelections.filter(
      (num) => parseInt(shared) + parseInt(study) + num <= 6
    );
    const optionsB = availableSelections.filter(
      (num) => parseInt(single) + parseInt(study) + num <= 6
    );
    const optionsC = availableSelections.filter(
      (num) => parseInt(single) + parseInt(shared) + num <= 6
    );
    return (
      <Router>
        <div className='Room'>
          <Switch>
            <Route exact path='/room'>
              <div className='Header'>Welcome User #555 to Year 2050!</div>
              <div className='SubHeader'>
                Select your required rooms. Note you can have a maximum total of
                6.
              </div>
              <div className='CapOptions'>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Single Bedrooms:
                    <select
                      value={single.toString()}
                      onChange={this.handleChangeA}
                    >
                      {optionsA.map((num) => (
                        <option key={num} value={num.toString()}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </label>
                  <br></br>
                  <label>
                    Shared Bedrooms:
                    <select
                      value={shared.toString()}
                      onChange={this.handleChangeB}
                    >
                      {optionsB.map((num) => (
                        <option key={num} value={num.toString()}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </label>
                  <br></br>
                  <label>
                    Studyrooms:
                    <select
                      value={study.toString()}
                      onChange={this.handleChangeC}
                    >
                      {optionsC.map((num) => (
                        <option key={num} value={num.toString()}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </label>
                  <br></br>
                  <Link to='/'>Next</Link>
                </form>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Room;
