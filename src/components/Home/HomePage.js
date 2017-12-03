import React from 'react';

import SearchBox from '../Search/SearchBox';
import RecipeList from '../Recipe/RecipeList';
import { searchRecipes } from '../Search/searchService';

import {getRecipes} from '../../api/recipeApi';
import {getCategories} from '../../api/categoryApi';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      categories: [],
      searchOptions: {
        searchString: ''
      }
    };

    this.updateSearchState = this.updateSearchState.bind(this);
  }

  componentDidMount() {
    getRecipes()
      .then((results) => {
        this.setState({recipes: results});
    });

    getCategories()
      .then((results) => {
        this.setState({categories: results});
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

    const recipesWithCategories = visibleRecipes.map(recipe => {
      const categoriesForRecipe = recipe.category_ids.reduce((includedCategories, categoryId) => {
        const foundCategory = this.state.categories.find(category => categoryId === category.id);
        if (foundCategory) {
          return includedCategories.concat(foundCategory);
        } else {
          return includedCategories;
        }
      }, []);

      return Object.assign({}, recipe, { categories: categoriesForRecipe });
    });

    return (
      <div className="container">
        <h1>Browse Recipes</h1>
        <SearchBox searchOptions={this.state.searchOptions} onChange={this.updateSearchState} />
        <RecipeList recipes={recipesWithCategories} />
      </div>
    );
  }
}

export default Home;
