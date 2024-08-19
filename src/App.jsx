import React from 'react';
// import  Counter  from './Components/Counter';
// import CounterContext from './Contexts/CounterContext';
// import CompA from './Components/CompA';
// import NameContext from './Contexts/NameContext';
import CarsContext from './Contexts/CarsContext';
import Cars from './Components/Cars'
import UserContext from './Contexts/UserContext';

const App = () => {
  return (
    <div>
      {/* <CounterContext>
         <Counter />
       <NameContext>
         <CompA />
       </NameContext>
      </CounterContext> */}
      {/* <CarsContext>
        <Cars />
      </CarsContext> */}
      <UserContext />
    </div>
  );
};

export default App;
