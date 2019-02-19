import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Blog</h1>
    <NavLink to="/" activeClassName="active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="active">Create post</NavLink>
  </header>
);

export default Header;
