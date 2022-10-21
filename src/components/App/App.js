import React, { Component } from 'react';
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Info from '../Info/AppInfo.js';
import Map from '../Map/USMap.js';
import FunFacts from '../FunFacts/FunFacts.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>UNITED STATES</h1>
          <ul className="header">
            <li><NavLink to="/Info/AppInfo.js">Info</NavLink></li>
            <li><NavLink to="/Map/USMap.js">Map</NavLink></li>
            <li><NavLink to="/FunFacts/FunFacts.js">Fun Facts</NavLink></li>
          </ul>
            <div className="content" style={{border: '2px solid black' }}>
              <Routes>
                <Route path="/Info/AppInfo.js" element={<Info />}/>
                <Route path="/Map/USMap.js" element={<Map />}/>
                <Route path="/FunFacts/FunFacts.js" element={<FunFacts />}/>
              </Routes>
            </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
