import React from 'react';
import RecipeList from './RecipeList';

import {getRecipes} from '../api/recipeApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    getRecipes()
      .then((results) => {
        this.setState({recipes: results});
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Kirkpatrick Recipes</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
