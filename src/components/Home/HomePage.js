import React from 'react';

import SearchBox from '../Search/SearchBox';
import RecipeList from '../Recipe/RecipeList';
import { searchRecipes } from '../Search/searchService';

import {getRecipes} from '../../api/recipeApi';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      searchOptions: {
        searchString: ''
      }
    };

    this.updateSearchState = this.updateSearchState.bind(this);
  }

  componentDidMount() {
    getRecipes()
      .then((results) => {
        this.recipes = [...results];
        this.setState({recipes: results});
    });
  }

  updateSearchState(event) {
    const field = event.target.name;
    let options = this.state.searchOptions;
    options[field] = event.target.value;
    this.setState({ searchOptions: options });
  }

  render() {
    const visibleRecipes = searchRecipes(this.state.recipes, this.state.searchOptions);

    return (
      <div className="container">
        <h1>Browse Recipes</h1>
        <SearchBox searchOptions={this.state.searchOptions} onChange={this.updateSearchState} />
        <RecipeList recipes={visibleRecipes} />
      </div>
    );
  }
}

export default Home;
