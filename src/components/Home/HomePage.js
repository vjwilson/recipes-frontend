import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeFilterActions from '../../actions/recipeFilterActions';

import SearchBox from '../Search/SearchBox';
import RecipeList from '../Recipe/RecipeList';
import { searchRecipes } from '../Search/searchService';

import {getRecipes} from '../../api/recipeApi';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      visibleRecipes: [],
      searchOptions: {
        searchString: this.props.recipeFilter.wildcard
      }
    };

    this.updateSearchState = this.updateSearchState.bind(this);
  }

  componentDidMount() {
    getRecipes()
      .then((results) => {
        this.setState({
          recipes: [...results],
          visibleRecipes: [...results]
        });
    });
  }

  updateSearchState(event) {
    const field = event.target.name;
    let options = this.state.searchOptions;
    options[field] = event.target.value;

    this.props.actions.setRecipeFilter({ wildcard: options[field ]});
    this.setState({ searchOptions: options });
  }

  render() {
    const visibleRecipes = searchRecipes(this.state.recipes, this.props.recipeFilter);

    return (
      <div className="container">
        <h1>Browse Recipes</h1>
        <SearchBox searchOptions={this.props.recipeFilter} onChange={this.updateSearchState} />
        <RecipeList recipes={visibleRecipes} />
      </div>
    );
  }
}

HomePage.propTypes = {
  recipeFilter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    recipeFilter: state.recipeFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeFilterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
