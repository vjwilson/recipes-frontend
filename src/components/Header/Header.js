import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoginBox from '../Login/LoginBox';

import './Header.css';

const Header = ({ profile, login, logout, updateFormField, credentials, loginErrors }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Kirkpatrick Recipes</div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item"><IndexLink to="/" className="navbar__menu-link" activeClassName="active">Browse</IndexLink></li>
        <li className="navbar__menu-item"><Link to="/categories" className="navbar__menu-link" activeClassName="active">Categories</Link></li>
        { (profile && profile.token) && <li className="navbar__menu-item"><Link to="/admin" className="navbar__menu-link" activeClassName="active">Admin</Link></li>}
      </ul>
      <div className="navbar__block">
        {
          (profile && profile.username)
          ?
          (<ul>
            <li className="navbar__text">{profile.username}</li>
            <li className="navbar__text"><button className="navbar__link" onClick={logout}>Logout</button></li>
          </ul>)
          :
          (<LoginBox email={credentials.email} password={credentials.password} updateFormField={updateFormField} submitLogin={login} errors={loginErrors} />)
        }
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
