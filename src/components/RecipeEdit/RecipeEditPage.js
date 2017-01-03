import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
// import toastr from 'toastr';
import RecipeForm from './RecipeForm';

import { getOneRecipe, saveRecipe } from '../../api/recipeApi';

class RecipeEditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeId: this.props.params.id, // from the path '/recipe/:id/edit'
      recipe: {
        name: '',
        author: '',
        ingredients: [],
        directions: ''
      },
      errors: {},
      saving: false
    };

    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  componentDidMount() {
    getOneRecipe(this.state.recipeId)
      .then((result) => {
        const newRecipe = Object.assign({}, result);
        this.setState({recipe: newRecipe});
    });
  }

  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;
    this.setState({ recipe: recipe });
  }

  addIngredient(newIngredient) {
    const newIngredientsList = [...this.state.recipe.ingredients, newIngredient];
    const newRecipe = Object.assign({}, this.state.recipe);

    newRecipe.ingredients = newIngredientsList;
    newRecipe.newIngredient = '';
    this.setState({ recipe: newRecipe });
  }

  removeIngredient(ingredientName) {
    const newIngredientsList = this.state.recipe.ingredients.filter(ingredient => {
      return ingredient !== ingredientName;
    });
    const newRecipe = Object.assign({}, this.state.recipe);

    newRecipe.ingredients = newIngredientsList;
    this.setState({ recipe: newRecipe });
  }

  saveRecipe(event) {
    event.preventDefault();

    // if (!this.courseFormIsValid()) {
    //   return;
    // }

    this.setState({ saving: true });
    saveRecipe(this.state.course)
      .then(() => this.redirect())
      .catch(() => {
        // toastr.error(`${error} Recipe could not be saved. Try again.`, 'Error!');
        this.setState({ saving: false });
      });
  }

  redirect() {
    // toastr.success('Course saved successfully.', 'Success!');
    this.setState({ saving: false });
    browserHistory.push('/admin');
  }

  render() {
    return (
      <div className="container">
        <h1>Edit Recipe</h1>
        <RecipeForm
          recipe={this.state.recipe}
          errors={this.state.errors}
          onChange={this.updateRecipeState}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          onSave={this.saveRecipe}
          saving={this.state.saving} />
      </div>
    );
  }
}

RecipeEditPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default RecipeEditPage;
