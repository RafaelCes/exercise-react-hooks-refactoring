// src/App.js

import React from 'react';
import './App.css';
import Cars from './Cars';
import Provider from './context/Provider';
import TrafficSignal from './TrafficSignal';

function App() {
  return (
    <div className="container">
      <Provider>
        <Cars />
        <TrafficSignal />
      </Provider>
    </div>
  );
}

export default App;
