import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getRecipes() {
  return get('recipes');
}

export function getOneRecipe(id) {
  return get(`recipes/${id}`);
}

export function saveRecipe(recipe) {
  if (recipe.id) {
    return put(`recipes/${id}`, recipe);
  } else {
    return post(`recipes`, recipe);
  }
}

export function deleteRecipe(id) {
  return del(`recipes/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function put(url, recipe) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function post(url, recipe) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
