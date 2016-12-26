import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function authLogin(credentials) {
  return login('auth/signin', credentials);
}

function login(url, credentials) {
  return fetch(baseUrl + url, {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(credentials)
  }).then(onSuccess, onError);
}


function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
