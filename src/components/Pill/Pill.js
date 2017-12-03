import React from 'react';
import PropTypes from 'prop-types';

import './Pill.css';

const Pill = ({ children }) => {
  return (
    <span className="pill">
      {children}
    </span>
  );
};

Pill.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Pill;
