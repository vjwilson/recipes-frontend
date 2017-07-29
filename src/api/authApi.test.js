import { expect } from 'chai';
import fetchMock from 'fetch-mock';

import { authLogin, authStore, authRetrieve, authLogout} from './authApi';

describe('Auth API', function() {
  const token = 'JWT 1234567890';
  let profile;

  const localStorage = window.localStorage;

  beforeEach(function() {
    fetchMock.post('end:auth/signin', { token: token });
  });

  afterEach(function() {
    fetchMock.restore();
  });

  describe('authLogin', function() {
    it('should call the login endpoint with the given credentials', function() {
      const credentials = {
        email: 'jdoe@example.com',
        password: 'monkey123'
      };

      const loginResponse = authLogin(credentials);

      expect(loginResponse instanceof Promise).to.be.true;

      const lastCall = fetchMock.lastCall();
      expect(lastCall[1].method).to.equal('post');
      expect(lastCall[1].body).to.equal(JSON.stringify(credentials));
    });
  });

  describe('authStore', function() {
    it('should store a good profile in localStorage', function() {
      const profile = {
        email: 'jdoe@example.com',
        token: token
      };

      const storeResponse = authStore(profile);
      expect(storeResponse).to.eql({
        username: 'jdoe',
        email: 'jdoe@example.com',
        token: token
      });

      const afterProfile = JSON.parse(localStorage.getItem('profile'));
      expect(afterProfile).to.eql({
        username: 'jdoe',
        email: 'jdoe@example.com',
        token: token
      });
    });
  });

  describe('authRetrieve', function() {
    it('should get an existing profile from localStorage', function() {
      profile =  {
        username: 'jdoe',
        email: 'jdoe@example.com',
        token: token
      };
      localStorage.setItem('profile', JSON.stringify(profile));

      const storeResponse = authRetrieve();

      expect(storeResponse).to.eql({
        username: 'jdoe',
        email: 'jdoe@example.com',
        token: token
      });
    });

    it('should get an empty object when no profile in localStorage', function() {
      localStorage.setItem('profile', '');

      const storeResponse = authRetrieve();

      expect(storeResponse).to.eql({});
    });
  });

  describe('authLogout', function() {
    it('should clear the profile from local storage', function() {
      profile =  {
        username: 'jdoe',
        email: 'jdoe@example.com',
        token: token
      };
      localStorage.setItem('profile', JSON.stringify(profile));

      authLogout();

      const afterProfile = localStorage.getItem('profile');
      expect(afterProfile).to.equal('');
    });
  });
});
