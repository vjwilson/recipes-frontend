import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import * as recipeFilterActions from '../../actions/recipeFilterActions';

import SearchBox from '../Search/SearchBox';
import RecipeList from '../Recipe/RecipeList';
import { searchRecipes } from '../Search/searchService';

import {getRecipes} from '../../api/recipeApi';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.recipes.data,
      visibleRecipes: [],
      searchOptions: {
        searchString: this.props.recipeFilter.wildcard
      }
    };

    this.updateSearchState = this.updateSearchState.bind(this);
  }

  componentDidMount() {
console.log('componentDidMount',this.props.recipes);
    // getRecipes()
    //   .then((results) => {
    //     this.setState({
    //       recipes: [...results],
    //       visibleRecipes: [...results]
    //     });
    // });
  }

  updateSearchState(event) {
    const field = event.target.name;
    let options = this.state.searchOptions;
    options[field] = event.target.value;

    this.props.actions.setRecipeFilter({ wildcard: options[field ]});
    this.setState({ searchOptions: options });
  }

  render() {
    return (
      <div className="container">
        <h1>Browse Recipes</h1>
        <SearchBox searchOptions={this.props.recipeFilter} onChange={this.updateSearchState} />
        {this.props.recipes.isFetching && <p>Waiting to load recipes...</p>}
        <RecipeList recipes={this.props.recipes.data} />
      </div>
    );
  }
}

HomePage.propTypes = {
  recipes: PropTypes.object.isRequired,
  recipeFilter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    recipeFilter: state.recipeFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      recipeActions: bindActionCreators(recipeActions, dispatch),
      recipeFilterActions: bindActionCreators(recipeFilterActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
