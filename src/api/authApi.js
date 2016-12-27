import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function authLogin(credentials) {
  return login('auth/signin', credentials);
}

export function authStore(profile) {
  if (profile.email && profile.token) {
    profile.username = profile.email.substring(0, profile.email.indexOf('@'));
    localStorage.setItem('profile', JSON.stringify(profile));
    return profile;
  } else {
    return {};
  }
}

export function authRetrieve() {
  try {
    const profile = JSON.parse(localStorage.getItem('profile'));
    return profile;
  }
  catch(e) {
    return {};
  }
}

export function authLogout() {
  localStorage.setItem('profile', '');
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
