import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled","success");
      document.title="TextUtilts - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtilts is a amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtilts now";
      // }, 1500);
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
      // document.title="TextUtilts - Light Mode";
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Try Textutils - Word Counter, Character Counter, Remove extra Spaces"  mode={mode} showAlert={showAlert} />}>
            {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
            </Route>
          </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
