import React from 'react';
import IngredientsList from '../Ingredients/IngredientsList';

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
      </div>
      <div className="input-field">
        <label htmlFor="author">Recipe Author</label>
        <input id="author" name="author" value={recipe.author} onChange={onChange} />
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
        <label htmlFor="directions">Recipe Author</label>
        <textarea id="directions" name="directions" value={recipe.directions} onChange={onChange} />
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
  recipe: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  addIngredient: React.PropTypes.func.isRequired,
  removeIngredient: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default RecipeForm;
