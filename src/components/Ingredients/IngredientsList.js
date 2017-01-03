import React, {PropTypes} from 'react';
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
  onRemove: React.PropTypes.func.isRequired
};

export default IngredientsList;
