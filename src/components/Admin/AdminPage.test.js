import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { AdminPage } from './AdminPage';
import fetchMock from 'fetch-mock';

describe('AdminPage component', function() {
  let props;

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

  beforeEach(function() {
    fetchMock.get('*', mockRecipes);
  });

  afterEach(function() {
    fetchMock.restore();
  });

  describe('initial render', function() {

    it('should render the static component', function() {
      const shallowOutput = shallow(
        <MemoryRouter>
          <AdminPage {...props} />
        </MemoryRouter>
      );

      expect(shallowOutput).to.have.length(1);
    });

    it('should a title that contains the name', function() {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/admin' ]}>
          <AdminPage {...props} />
        </MemoryRouter>
      );

      expect(wrapper.find('h1').text()).to.contain('Admin');
    });
  });
});
