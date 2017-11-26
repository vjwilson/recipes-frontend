import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import LoginBox from '../Login/LoginBox';

import './Header.css';

const Header = ({ profile, login, logout, updateFormField, credentials, loginErrors }) => {
  let authBlock;
  if (profile && profile.username) {
    authBlock = (<div>
                  <span className="navbar__text">{profile.username}</span>
                  <span className="input-field--inline"><button onClick={logout}>Logout</button></span>
                 </div>);
  } else {
    authBlock = (<LoginBox email={credentials.email} password={credentials.password} updateFormField={updateFormField} submitLogin={login} errors={loginErrors} />);
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">Kirkpatrick Recipes</div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item"><NavLink to="/" className="navbar__menu-link" activeClassName="active">Browse</NavLink></li>
        <li className="navbar__menu-item"><NavLink to="/categories" className="navbar__menu-link" activeClassName="active">Categories</NavLink></li>
        { (profile && profile.token) && <li className="navbar__menu-item"><NavLink to="/admin" className="navbar__menu-link" activeClassName="active">Admin</NavLink></li>}
      </ul>
      <div className="navbar__block">
        {authBlock}
      </div>
    </nav>
  );
};

Header.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
  profile: PropTypes.object,
  credentials: PropTypes.object,
  loginErrors: PropTypes.array
};

export default Header;
