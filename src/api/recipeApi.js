import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

import { authRetrieve } from './authApi';

const baseUrl = getBaseUrl();

export function getRecipes() {
  return get('recipes');
}

export function getOneRecipe(id) {
  return get(`recipes/${id}`);
}

export function saveRecipe(recipe) {
  if (recipe.id) {
    return put(`recipes/${recipe.id}`, recipe);
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
  const profile = authRetrieve();

  return fetch(baseUrl + url, {
    method: 'put',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": profile.token
    },
    body: JSON.stringify(recipe)
  }).then(onSuccess, onError);
}

function post(url, recipe) {
  const profile = authRetrieve();

  return fetch(baseUrl + url, {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": profile.token
    },
    body: JSON.stringify(recipe)
  }).then(onSuccess, onError);
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
