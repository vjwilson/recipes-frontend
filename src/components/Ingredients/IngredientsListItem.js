import React from 'react';
import PropTypes from 'prop-types';

const IngredientsListItem = ({ ingredient, onRemove }) => {
  function removeItem(event) {
    event.preventDefault();
    onRemove(ingredient);
  }

  return (
    <li className="editable-items__item">
      <span>{ingredient}</span>
      <button
        type="button"
        className="editable-items__remove-button"
        aria-label="Remove ingredient from recipe"
        onClick={removeItem}>
          X
      </button>
    </li>
  );
};

IngredientsListItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default IngredientsListItem;
