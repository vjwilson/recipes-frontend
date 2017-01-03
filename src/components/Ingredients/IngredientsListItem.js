import React, {PropTypes} from 'react';

const IngredientsListItem = ({ ingredient, onRemove }) => {
  function removeItem(event) {
    event.preventDefault();
    onRemove(ingredient);
  }

  return (
    <li className="editable-list__item">
      <span>{ingredient}</span>
      <button
        type="button"
        className="editable-list__remove-button"
        aria-label="Remove ingredient from recipe"
        onClick={removeItem}>
          X
      </button>
    </li>
  );
};

IngredientsListItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
  onRemove: React.PropTypes.func.isRequired
};

export default IngredientsListItem;
