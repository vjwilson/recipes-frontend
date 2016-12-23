import React, {PropTypes} from 'react';
import Header from '../Header/Header';

export class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: null
    };

    this.loginAction = this.loginAction.bind(this);
    this.logoutAction = this.logoutAction.bind(this);
  }

  loginAction() {
    this.setState({
      user: { username: 'jdoe'}
    });
    this.context.router.push('/login');
  }

  logoutAction() {
    this.setState({ user: null });
    this.context.router.push('/');
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

App.contextTypes = {
  router: PropTypes.object
};

export default App;
