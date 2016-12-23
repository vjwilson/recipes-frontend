import React, {PropTypes} from 'react';
import Header from '../Header/Header';

export class App extends React.Component {
  constructor(props) {
    super(props);

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
  }

  logoutAction() {
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="container-fluid">
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
