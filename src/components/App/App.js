import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch
} from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../Home/HomePage';
import CategoriesPage from '../Categories/CategoriesPage';
import AdminPage from '../Admin/AdminPage';
import RecipeEditPage from '../RecipeEdit/RecipeEditPage';

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
          this.props.history.push('/admin');
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
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <Header profile={this.state.profile} credentials={this.state.credentials} login={this.loginAction} logout={this.logoutAction} updateFormField={this.updateFormField} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/categories" component={CategoriesPage} exact />
          <Route path="/admin" component={AdminPage} exact />
          <Route path="/recipe/new" component={RecipeEditPage} exact />
          <Route path="/recipe/:id/edit" component={RecipeEditPage} exact />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;
