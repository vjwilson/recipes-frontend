export function sortRecipes(recipes) {
  return [].concat(recipes).sort((recipe1, recipe2) => {
    return (recipe1.name > recipe2.name) ? 1 : -1;
  });
}

export function firstIngredients(ingredients, n = 3) {
  let ingredientsStr = [].concat(ingredients).slice(0, n).join(', ');

  if (ingredients.length > n) {
    ingredientsStr += '...';
  }

  return ingredientsStr;
}

export function firstWords(text, n = 10) {
  let truncatedText = text.split(' ').slice(0, n).join(' ');

  if (truncatedText.length < text.length) {
    truncatedText += '...';
  }

  return truncatedText;
}
