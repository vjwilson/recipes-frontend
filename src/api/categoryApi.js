import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

import { authRetrieve } from './authApi';

const baseUrl = getBaseUrl();

export function getCategories() {
  return get('categories');
}

export function getOneRecipe(id) {
  return get(`categories/${id}`);
}

export function saveRecipe(category) {
  if (category.id) {
    return put(`categories/${category.id}`, category);
  } else {
    return post(`categories`, category);
  }
}

export function deleteRecipe(id) {
  return del(`categories/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function put(url, category) {
  const profile = authRetrieve();

  return fetch(baseUrl + url, {
    method: 'put',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": profile.token
    },
    body: JSON.stringify(category)
  }).then(onSuccess, onError);
}

function post(url, category) {
  const profile = authRetrieve();

  return fetch(baseUrl + url, {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": profile.token
    },
    body: JSON.stringify(category)
  }).then(onSuccess, onError);
}

function del(url) {
  const profile = authRetrieve();

  return fetch(baseUrl + url, {
    method: 'delete',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": profile.token
    },
  }).then(onSuccess, onError);
}

function onSuccess(response) {
  if (response.status !== 204) {
    return response.json();
  } else {
    return 'Success';
  }
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
