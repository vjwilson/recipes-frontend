import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';

import Header from '../Header/Header';

import { authLogin, authStore, authRetrieve, authLogout } from '../../api/authApi';

export class App extends React.Component {
  constructor(props) {
    super(props);

    const profile = authRetrieve();

    this.state = {
      profile: profile,
      credentials: {
        email: '',
        password: ''
      },
      errors: []
    };

    this.updateFormField = this.updateFormField.bind(this);
    this.loginAction = this.loginAction.bind(this);
    this.logoutAction = this.logoutAction.bind(this);
  }

  updateFormField(event) {
    const field = event.target.name;
    let options = this.state.credentials;
    options[field] = event.target.value;
    this.setState({ credentials: options });
  }

  loginAction(event) {
    event.preventDefault();
    this.setState({ errors: [] });
    authLogin(this.state.credentials)
      .then((result) => {
        if (result.errors && result.errors.length) {
          this.showErrors(result.errors);
        } else {
          const profile = authStore({
            email: this.state.credentials.email,
            token: result.token
          });
          this.setState({ profile: profile });
          browserHistory.push('/admin');
        }
      })
      .catch((errors) => {
        this.setState({ errors: errors });
      });
  }

  logoutAction() {
    event.preventDefault();
    authLogout();
    this.setState({ profile: {} });
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="container">
        <Header profile={this.state.profile} credentials={this.state.credentials} login={this.loginAction} logout={this.logoutAction} updateFormField={this.updateFormField} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
