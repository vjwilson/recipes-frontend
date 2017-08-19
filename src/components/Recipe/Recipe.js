import React from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList/ItemList';

import '../common/card.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="card">
        <header className="card__header">
          <h1 className="card__title">{this.props.recipe.name}</h1>
          <p>{this.props.recipe.author}</p>
        </header>
        <div className="card__body">
          <h3>Ingredients</h3>
          <ItemList items={this.props.recipe.ingredients} />
          <h3>Directions</h3>
          <p>{this.props.recipe.directions}</p>
        </div>
      </article>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Recipe;
