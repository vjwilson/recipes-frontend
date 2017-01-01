import React, {PropTypes} from 'react';
import RecipesTableRow from './RecipesTableRow';
import {sortRecipes} from '../../selectors/selectors';

const RecipesTable = ({ recipes, onDelete }) => {
  const sortedRecipes = sortRecipes(recipes);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Ingredients</th>
          <th>Directions</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedRecipes.map(recipe =>
          <RecipesTableRow key={recipe.id} recipe={recipe} onDelete={onDelete} />
        )}
      </tbody>
    </table>
  );
};

RecipesTable.propTypes = {
  recipes: PropTypes.array.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default RecipesTable;
