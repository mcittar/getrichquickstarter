import React from 'react';
import NavBar from './navbar/navbar_container';
import Footer from './navbar/footer';

const App = ({ children }) => (
  <div id='app'>
    <NavBar />
    { children }
    <Footer />
  </div>
);

export default App;
