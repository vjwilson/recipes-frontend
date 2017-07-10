import React, {PropTypes} from 'react';
import Recipe from './Recipe';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const recipeList = this.props.recipes
      .sort((recipe1, recipe2) => {
        return (recipe1.name > recipe2.name) ? 1 : -1;
      })
      .map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      });

    return (
      <ul className="card-container">
        {recipeList}
      </ul>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;
