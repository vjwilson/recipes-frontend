import React from 'react';
import PropTypes from 'prop-types';

import '../common/form.css';
import './LoginBox.css';

const LoginBox = ({ email, password, updateFormField, submitLogin, errors }) => {
  let messageBox;
  if (errors && errors.length) {
    const errorMessage = errors.join(' ');
    messageBox = (
      <div className="message-box--error">
        {errorMessage}
      </div>
    );
  }

  return (
    <form className="form--inline" onSubmit={submitLogin}>
      {messageBox}
      <div className="input-field--inline">
        <label htmlFor="login-box-email">Email</label>
        <input id="login-box-email" name="email" type="email" value={email} onChange={updateFormField} />
      </div>
      <div className="input-field--inline">
        <label htmlFor="login-box-password">Password</label>
        <input id="login-box-password" name="password" type="password" value={password} onChange={updateFormField} />
      </div>
      <div className="input-field--inline">
        <button type="submit" disabled={!(email && password)}>Login</button>
      </div>
    </form>
  );
};

LoginBox.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  errors: PropTypes.array
};

export default LoginBox;
