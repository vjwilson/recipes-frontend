import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import App from './App'; //eslint-disable-line import/no-named-as-default

describe('App component', function() {
  beforeEach(function() {
    fetchMock.get('*', []);
  });

  afterEach(function() {
    fetchMock.restore();
  });

  describe('initial render', function() {

    it('should render the component', function() {
      const shallowOutput = shallow(
        <MemoryRouter>
          <App><div /></App>
        </MemoryRouter>
      );

      expect(shallowOutput).to.have.length(1);
    });

    it('should render any children passed in as props', function() {
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.children()).to.have.length(2);
      expect(wrapper.childAt(0).text()).contains('Browse');
    });
  });
});
