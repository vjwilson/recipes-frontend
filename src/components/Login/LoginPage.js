import React from 'react';
import {browserHistory} from 'react-router';
import LoginBox from './LoginBox';

import { authLogin, authStore } from '../../api/authApi';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: ''
      },
      errors: []
    };

    this.updateFormField = this.updateFormField.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  updateFormField(event) {
    const field = event.target.name;
    let options = this.state.credentials;
    options[field] = event.target.value;
    this.setState({ credentials: options });
  }

  submitLogin(event) {
    event.preventDefault();
    this.setState({ errors: [] });
    authLogin(this.state.credentials)
      .then((result) => {
        if (result.errors && result.errors.length) {
          this.showErrors(result.errors);
        } else {
          authStore({
            email: this.state.credentials.email,
            token: result.token
          });
          browserHistory.push('/admin');
        }
      })
      .catch((errors) => {
        this.setState({ errors: errors });
      });
  }

  showErrors(errors) {
    this.setState({ errors: errors });
  }

  render() {
    return (
      <div className="container--centered">
        <section>
          <h1>Admin Login</h1>
          <LoginBox email={this.state.credentials.email} password={this.state.credentials.password} updateFormField={this.updateFormField} submitLogin={this.submitLogin} errors={this.state.errors} />
        </section>
      </div>
    );
  }
}

export default LoginPage;
