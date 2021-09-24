import './App.css';
import React from 'react';
import DoctorLogin from './Pages/DoctorLogin/doclogin';
import PatientLogin from './Pages/PatientLogin/patientlogin';

function App() {
  return (
    <div className="App">
      <h1> MEDIBRAIN </h1>
      <DoctorLogin/>
      <PatientLogin/>
    </div>
  );
}

export default App;
