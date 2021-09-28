import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import DoctorLoginPage from './Pages/DoctorLoginPage/DoctorLoginPage';
import PatientLoginPage from './Pages/PatientLoginPage/PatientLoginPage';

function App() {
  return (
    <div className="App">
      <h1> MEDIBRAIN </h1>

      <Switch>
        <Route exact path = '/' component = {DoctorLoginPage} />
        <Route exact path = '/patientlogin' component = {PatientLoginPage} />
      </Switch>

    </div>
  );
}

export default App;

//in between switch i placed all the pages (inside Rotute)