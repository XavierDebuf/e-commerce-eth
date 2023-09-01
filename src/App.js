import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Games from "./components/Games";

import SaveToJson from './components/SaveToJson';


function App () {
      return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/edit" element={<SaveToJson />} />
      </Routes>
    </Router>
      );
    
  
}

export default App;