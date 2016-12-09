import './index.css';

import {getRecipes, deleteRecipe} from './api/recipeApi';

getRecipes().then((result) => {
  let recipesBody = '';

  result.forEach((recipe) => {
    recipesBody += `
      <tr>
        <td><a href="#" data-id="${recipe.id}" class="deleteRecipe">Delete</a></td>
        <td>${recipe.id}</td>
        <td>${recipe.name}</td>
        <td>${recipe.author}</td>
        <td>${recipe.ingredients}</td>
        <td>${recipe.directions}</td>
      </tr>
    `;
  });

  global.document.getElementById('recipes').innerHTML = recipesBody;

  const deleteLinks = global.document.getElementsByClassName('deleteRecipe');

  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteRecipe(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
