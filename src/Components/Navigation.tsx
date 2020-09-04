import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <NavLink to="/tsx-app">Home</NavLink>
      <NavLink to="/tsx-app/about">About</NavLink>
      <NavLink to="/tsx-app/learn">Learn</NavLink>
    </div>
  );
}

export default Navigation;
