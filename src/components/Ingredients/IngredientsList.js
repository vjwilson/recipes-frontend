import React from 'react';
import PropTypes from 'prop-types';

import IngredientsListItem from './IngredientsListItem';

const IngredientsList = ({ingredients, onRemove}) => {
  return (
    <ul className="editable-items">
      {ingredients.map((ingredient, index) =>
        <IngredientsListItem key={index} ingredient={ingredient} onRemove={onRemove} />
      )}
    </ul>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default IngredientsList;
