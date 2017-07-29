import React from 'react';
import PropTypes from 'prop-types';

import '../common/items.css';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <li className="item-list__item" key={index + 1}>
          {item}
        </li>);
    });

    return (
      <ul className="item-list">
        {items}
      </ul>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
