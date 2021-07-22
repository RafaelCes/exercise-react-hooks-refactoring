// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
 const [redCar, setRedCar] = useState(false);
 const [blueCar, setBlueCar] = useState(false);
 const [yellowCar, setYellowCar] = useState(false);
 const [trafficColor, setTrafficColor] = useState('red');
 const carsContextValue = {
   redCar,
   setRedCar,
   blueCar,
   setBlueCar,
   yellowCar,
   setYellowCar,
   trafficColor,
   setTrafficColor,
 };

  return (
    <CarsContext.Provider value={carsContextValue}>
      {children}
    </CarsContext.Provider>
  );
}
export default Provider;