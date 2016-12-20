import { expect } from 'chai';
import { searchRecipes } from './searchService';

describe('searchRecipes', function() {
  const allRecipes = [
    {
      id: 1,
      name: 'English Toffee',
      author: 'John Lennon',
      ingredients: ['sugar', 'two', 'three'],
      directions: 'Mix well. Chill.'
    },
    {
      id: 2,
      name: 'Pecan Pie',
      author: 'Paul McCartney',
      ingredients: ['one', 'two', 'three', 'sugar'],
      directions: 'Mix in bowl. Cook for 1 hour.'
    },
    {
      id: 3,
      name: 'Ski Chili',
      author: 'George Harrison',
      ingredients: ['one', 'three', 'five'],
      directions: 'Combine ingredients.'
    },
    {
      id: 4,
      name: 'Spinach Casserole',
      author: 'Ringo Starr',
      ingredients: ['one', 'sugar', 'three'],
      directions: 'D is an unnamed extra.'
    }
  ];

  let searchOptions = {
    searchString: ''
  };

  it('should return an empty array when passed an empty array', function() {
    const filteredRecipes = searchRecipes([], searchOptions);

    expect(filteredRecipes).to.eql([]);
  });

  it('should return all elements of an array when passed an empty search string', function() {
    const filteredRecipes = searchRecipes(allRecipes, searchOptions);

    expect(filteredRecipes).to.eql(allRecipes);
  });

  it('should return elements of an array whose names contain the search string', function() {
    searchOptions.searchString = 'ch';
    const filteredRecipes = searchRecipes(allRecipes, searchOptions);

    expect(filteredRecipes).to.have.lengthOf(2);
    expect(filteredRecipes[0].name).to.equal('Ski Chili');
    expect(filteredRecipes[1].name).to.equal('Spinach Casserole');
  });

  it('should return elements of an array whose ingredients contain the search string', function() {
    searchOptions.searchString = 'suga';
    const filteredRecipes = searchRecipes(allRecipes, searchOptions);

    expect(filteredRecipes).to.have.lengthOf(3);
    expect(filteredRecipes[0].ingredients[0]).to.equal('sugar');
    expect(filteredRecipes[1].ingredients[3]).to.equal('sugar');
    expect(filteredRecipes[2].ingredients[1]).to.equal('sugar');
  });
});
