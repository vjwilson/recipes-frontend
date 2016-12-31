import React from 'react';
import RecipesTable from '../Recipe/RecipesTable';

import {getRecipes} from '../../api/recipeApi';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      searchOptions: {
        searchString: ''
      }
    };

    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete() {
    // recipeApi.deleteRecipe(recipeId)
    //   .then(() => {
    //     alert('Recipe deleted successfully.', 'Success!');
    //   })
    //   .catch((error) => {
    //     alert(`${error} Recipe could not be deleted. Try again.`, 'Error!');
    //   });
  }

  componentDidMount() {
    getRecipes()
      .then((results) => {
        this.recipes = [...results];
        this.setState({recipes: results});
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Recipes Admin</h1>
        <RecipesTable recipes={this.state.recipes} onDelete={this.onClickDelete} />
      </div>
    );
  }
}

export default AdminPage;
