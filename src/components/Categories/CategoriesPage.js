import React from 'react';

import {getCategories} from '../../api/categoryApi';

class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    getCategories()
      .then((results) => {
        this.setState({ categories: results });
    });
  }

  render() {
    const categoryList = this.state.categories.map(category => {
      return (
        <article className="card">
          <header className="card__header">
            <h2 className="card__title">{category.name}</h2>
          </header>
          <div className="card__body">
            <p>{category.description}</p>
          </div>
        </article>
      );
    });

    return (
      <div className="container">
        <h1>Recipe Categories</h1>
        {
          this.state.categories.length
            ? (
              <ul className="card-container">
                {categoryList}
              </ul>
            )
            : 'No categories'
        }
      </div>
    );
  }
}

export default CategoriesPage;
