import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { firstIngredients, firstWords } from '../../selectors/selectors';

const RecipesTableRow = ({ recipe, onDelete }) => {
  function deleteClick(event) {
    event.preventDefault();
    onDelete(recipe);
  }

  return (
    <tr>
      <td><Link to={`/recipe/${recipe.id}/edit`}>{recipe.name}</Link></td>
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
  onDelete: PropTypes.func.isRequired
};

export default RecipesTableRow;
