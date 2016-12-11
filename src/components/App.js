import React, {PropTypes} from 'react';
import RecipeList from './RecipeList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.recipes
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Kirkpatrick Recipes</h1>
        <RecipeList recipes={this.props.recipes} />
      </div>
    );
  }
}

App.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default App;
