import React from 'react';
import LoginBox from './LoginBox';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginOptions: {
        email: '',
        password: ''
      }
    };

    this.updateFormField = this.updateFormField.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  updateFormField(event) {
    const field = event.target.name;
    let options = this.state.loginOptions;
    options[field] = event.target.value;
    this.setState({ loginOptions: options });
  }

  submitLogin(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container--centered">
        <section>
          <h1>Admin Login</h1>
          <LoginBox email={this.state.loginOptions.email} password={this.state.loginOptions.password} updateFormField={this.updateFormField} submitLogin={this.submitLogin} />
        </section>
      </div>
    );
  }
}

export default LoginPage;
