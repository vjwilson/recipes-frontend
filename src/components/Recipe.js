import React, {PropTypes} from 'react';

import './card.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.recipe
    };
  }

  render() {
    return (
      <article className="card">
        <header className="card__header">
          <h1 className="card__title">{this.props.recipe.name}</h1>
          <p>{this.props.recipe.author}</p>
        </header>
        <div className="card__body">
          <h2>Ingredients</h2>
          <p>{this.props.recipe.ingredients}</p>
          <h2>Directions</h2>
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
