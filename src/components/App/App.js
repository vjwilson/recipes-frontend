import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import Header from '../Header/Header';

import { authRetrieve, authLogout } from '../../api/authApi';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.loginAction = this.loginAction.bind(this);
    this.logoutAction = this.logoutAction.bind(this);
  }

  componentWillMount() {
    const profile = authRetrieve();
    if (profile.email) {
      const currentUser = {
        username: profile.email.substring(0, profile.email.indexOf('@')),
        token: profile.token
      };
      this.setState({ user: currentUser });
    }
  }

  loginAction(event) {
    event.preventDefault();
    browserHistory.push('/login');
  }

  logoutAction() {
    event.preventDefault();
    authLogout();
    browserHistory.push('/login');
  }

  render() {
    return (
      <div className="container">
        <Header user={this.state.user} login={this.loginAction} logout={this.logoutAction} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
