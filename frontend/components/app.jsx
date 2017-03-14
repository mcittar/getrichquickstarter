import React from 'react';
import NavBar from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <NavBar />
    { children }
  </div>
);

export default App;
