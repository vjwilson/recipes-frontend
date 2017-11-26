import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { authRetrieve } from '../../api/authApi';

/**
 * Higher-order component (HOC) to wrap restricted pages
 */
export default function RestrictedPage(BaseComponent) {
  class Restricted extends React.Component {

    componentWillMount() {
        this.checkAuthentication(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.checkAuthentication(nextProps);
        }
    }

    checkAuthentication(params) {
      const { history } = params;
      const profile = authRetrieve();

      if (!profile.token) {
        history.replace({ pathname: '/' });
      }
    }

    render() {
        return <BaseComponent {...this.props} />;
    }
  }

  Restricted.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  return withRouter(Restricted);
}
