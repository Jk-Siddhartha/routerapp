import React from 'react';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  return (
      <>
        <h1>this is the homepage</h1>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </>
  );
};

export default Homepage;
