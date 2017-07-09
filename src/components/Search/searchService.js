export function searchRecipes(recipes, searchOptions) {
  const currentSearchString = searchOptions.wildcard.toLowerCase();

  return recipes.filter(recipe => {
    if (recipe.name.toLowerCase().includes(currentSearchString)) {
      return true;
    }

    let found = false;
    found = recipe.ingredients.some(ingredient => {
      return ingredient.toLowerCase().includes(currentSearchString);
    });
    return found;
  });
}
