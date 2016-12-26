import React, {PropTypes} from 'react';

import '../common/form.css';
import './LoginBox.css';

const LoginBox = ({ email, password, updateFormField, submitLogin }) => {
  return (
    <form className="login-box" onSubmit={submitLogin}>
      <div className="input-field">
        <label htmlFor="login-box-email">Email</label>
        <input id="login-box-email" name="email" type="email" value={email} onChange={updateFormField} />
      </div>
      <div className="input-field">
        <label htmlFor="login-box-password">Password</label>
        <input id="login-box-password" name="password" type="password" value={password} onChange={updateFormField} />
      </div>
      <div className="input-field">
        <button type="submit" disabled={!(email && password)}>Login</button>
      </div>
    </form>
  );
};

LoginBox.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired
};

export default LoginBox;
