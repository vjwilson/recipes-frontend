import React, {PropTypes} from 'react';

import {getOneRecipe} from '../../api/recipeApi';

class RecipeEditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeId: this.props.params.id, // from the path '/recipe/:id/edit'
      recipe: {},
      errors: {},
      saving: false
    };
  }

  componentDidMount() {
    getOneRecipe(this.state.recipeId)
      .then((result) => {
        const newRecipe = Object.assign({}, result);
        this.setState({recipe: newRecipe});
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Edit Recipe {this.state.recipe.id}</h1>
      </div>
    );
  }
}

RecipeEditPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default RecipeEditPage;
