import React, {PropTypes} from 'react';
import Recipe from './Recipe';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.recipes
    };
  }

  render() {
    const recipeList = this.props.recipes.map((recipe) => {
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
