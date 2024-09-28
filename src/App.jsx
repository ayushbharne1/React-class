import React from 'react';
import Sep24 from './components/Sep24';
import Sep25 from './components/Sep25';
import Sep26 from './components/Sep26';
import Twoway_binding from './components/Twoway_binding';
import Sep27 from './components/Sep27';

const App = () => {
  // Array of user objects with name and age
  let user = [
    {
      name: 'John',
      age: 30,
    },
    {
      name: 'John',
      age: 30,
    },
    {
      name: 'John',
      age: 30,
    }
  ];

  // First map function with key prop to uniquely identify elements
  let ur = user.map((u, i) => <h1 key={i}>{u.name}</h1>);
  
  // Second map function (without a key initially, should be added to avoid warnings)
  let u = user.map((u, i) => <h1 key={i}>{u.name}</h1>);

  return (
    <>
      {/* Commented components for testing */}
      {/* <div>
        {ur}
      </div> */}
      {/* Uncomment components below as needed */}
      {/* <Sep24 /> */}
      {/* <Sep25 /> */}
      {/* <Sep26 /> */}
      {/* <Twoway_binding /> */}
      {/* <Sep27 /> */}
    </>
  );
};

export default App;
