import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

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
        <li className="navbar__menu-item"><IndexLink to="/" className="navbar__menu-link" activeClassName="active">Browse</IndexLink></li>
        <li className="navbar__menu-item"><Link to="/categories" className="navbar__menu-link" activeClassName="active">Categories</Link></li>
        { (profile && profile.token) && <li className="navbar__menu-item"><Link to="/admin" className="navbar__menu-link" activeClassName="active">Admin</Link></li>}
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
