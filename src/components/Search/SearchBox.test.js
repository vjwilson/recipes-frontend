import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('SearchBox component', function() {
  let props;

  const updateSearchOptions = function() {};

  describe('with empty search string', function() {
    it('should render the static component', function() {
      props = {
        searchOptions: {
          searchString: ''
        },
        onChange: updateSearchOptions
      };

      const shallowOutput = shallow(<SearchBox {...props} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should wrap the search field in the appropriate class', function() {
      props = {
        searchOptions: {
          searchString: ''
        },
        onChange: updateSearchOptions
      };

      const shallowOutput = shallow(<SearchBox {...props} />);

      const searchField = shallowOutput.find('#searchString');
      const searchWrapper = searchField.parent();
      expect(searchWrapper.hasClass('input-field--inline')).to.be.true;
    });
  });

  describe('with string string in props', function() {
    it('should render the static component', function() {
      props = {
        searchOptions: {
          searchString: 'pie'
        },
        onChange: updateSearchOptions
      };

      const shallowOutput = shallow(<SearchBox {...props} />);

      expect(shallowOutput).to.have.length(1);
    });
  });
});
