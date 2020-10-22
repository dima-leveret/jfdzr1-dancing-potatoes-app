import React from 'react';
import Nav from './Navigacja/Nav';
import Main from './Main';
import { useStyles } from './Navigacja/nav-styles';


function App() {
  fetch('/offers.json')
  .then((r) => {return r.json() })
  .then (x => console.log(x))
  return (
    <div className={useStyles}>
      <Nav/>
      <Main/>
    </div>
    
  );
}

export default App;
