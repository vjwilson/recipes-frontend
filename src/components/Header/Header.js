import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

import './Header.css';

const Header = ({ login, logout, user }) => {
  let authLink = login;
  let authLinkText = 'Login';
  let authMessage = 'Have an account?';
  if (user && user.username) {
    authLink = logout;
    authLinkText = 'Logout';
    authMessage = 'Welcome, ' + user.username;
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">Kirkpatrick Recipes</div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item"><a href="#">Browse</a></li>
        <li className="navbar__menu-item"><a href="#">Categories</a></li>
        <li className="navbar__menu-item"><Link to="/admin" className="navbar__menu-link" activeClassName="active">Admin</Link></li>
      </ul>
      <ul className="navbar__block">
        <li className="navbar__text">{authMessage}</li>
        <li><a href="#" className="navbar__link" onClick={authLink}>{authLinkText}</a></li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default Header;
