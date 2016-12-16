import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from './App';
import fetchMock from 'fetch-mock';

describe('App component', function() {

  const mockRecipes = [
    {
      id: 1,
      name: 'B',
      author: 'John Lennon',
      ingredients: ['one', 'two', 'three'],
      directions: 'Mix well. Chill.'
    },
    {
      id: 2,
      name: 'D',
      author: 'Paul McCartney',
      ingredients: ['one', 'two', 'three'],
      directions: 'Mix in bowl. Cook for 1 hour.'
    },
    {
      id: 3,
      name: 'A',
      author: 'George Harrison',
      ingredients: ['one', 'two', 'three'],
      directions: 'Combine ingredients.'
    },
    {
      id: 4,
      name: 'C',
      author: 'Ringo Starr',
      ingredients: ['one', 'two', 'three'],
      directions: 'D is an unnamed extra.'
    }
  ];

  describe('initial render', function() {
    beforeEach(function() {
      fetchMock.get('*', mockRecipes);
    });

    afterEach(function() {
      fetchMock.restore();
    });

    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874

      const shallowOutput = shallow(<App />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should start with an empty state', function() {
      const wrapper = mount(<App />);

      expect(wrapper.state().recipes).to.be.instanceof(Array);
      expect(wrapper.state().recipes).to.have.lengthOf(0);
    });
  });
});
