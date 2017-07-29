import React from 'react';
import PropTypes from 'prop-types';

import IngredientsList from '../Ingredients/IngredientsList';

import '../common/form.css';
import '../common/message.css';

const RecipeForm = ({recipe, onSave, onChange, addIngredient, removeIngredient, saving, errors}) => {
  function addItem(event) {
    event.preventDefault();
    addIngredient(recipe.newIngredient);
  }

  return (
    <form onSubmit={onSave}>
      <div className="input-field">
        <label htmlFor="name">Recipe Name</label>
        <input id="name" name="name" value={recipe.name} onChange={onChange} />
        {errors.name && <div className="alert--error">{errors.name}</div>}
      </div>
      <div className="input-field">
        <label htmlFor="author">Recipe Author</label>
        <input id="author" name="author" value={recipe.author} onChange={onChange} />
        {errors.author && <div className="alert--error">{errors.author}</div>}
      </div>
      <label>Ingredients</label>
      <IngredientsList ingredients={recipe.ingredients} onRemove={removeIngredient} />
      <div className="input-field--inline">
        <label htmlFor="newIngredient">New Ingredient</label>
        <input id="newIngredient" name="newIngredient" value={recipe.newIngredient} onChange={onChange} />
        <button
          type="button"
          disabled={!recipe.newIngredient}
          onClick={addItem}>
          Add to Ingredient List
        </button>
      </div>
      <div className="input-field">
        <label htmlFor="directions">Directions</label>
        <textarea id="directions" name="directions" value={recipe.directions} onChange={onChange} />
        {errors.directions && <div className="alert--error">{errors.directions}</div>}
      </div>
      <div className="input-field">
        <button
          type="submit"
          disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
};

RecipeForm.propTypes = {
  recipe: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default RecipeForm;
