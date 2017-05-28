import React from 'react';
import { Link } from 'react-router';

import RecipesTable from '../Recipe/RecipesTable';

import { getRecipes, deleteRecipe } from '../../api/recipeApi';

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

  onClickDelete(recipe) {
    if (confirm(`Are you sure you want to delete the recipe "${recipe.name}"`)) {
      deleteRecipe(recipe.id)
        .then(() => {
          alert('Recipe deleted successfully.', 'Success!');
          const results = this.recipes.filter(item => item.id !== recipe.id);
          this.setState({ recipes: results });
        })
        .catch((error) => {
          alert(`${error} Recipe could not be deleted. Try again.`, 'Error!');
        });
    }
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
        <div>
          <Link to="/recipe/new" className="primary-link">Add New Recipe</Link>
        </div>
        <RecipesTable recipes={this.state.recipes} onDelete={this.onClickDelete} />
      </div>
    );
  }
}

export default AdminPage;
