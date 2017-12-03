import React from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList/ItemList';
import Pill from '../Pill/Pill';

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
          <div className="pill-container">
            {this.props.recipe.categories.map(category => {
              return (
                <Pill key={category.id}>{category.name}</Pill>
              );
            })}
          </div>
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
