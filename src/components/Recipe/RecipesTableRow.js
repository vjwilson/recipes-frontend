import React, {PropTypes} from 'react';
// import {Link} from 'react-router';
import { firstIngredients, firstWords } from '../../selectors/selectors';

const RecipesTableRow = ({ recipe, onDelete }) => {
  function deleteClick(event) {
    event.preventDefault();
    onDelete(recipe.id);
  }

  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.author}</td>
      <td>{firstIngredients(recipe.ingredients)}</td>
      <td>{firstWords(recipe.directions)}</td>
      <td>
        <button
          type="button"
          onClick={deleteClick}
          className="btn btn-sm btn-danger">
            Delete
        </button>
      </td>
    </tr>
  );
};

RecipesTableRow.propTypes = {
  recipe: PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default RecipesTableRow;
