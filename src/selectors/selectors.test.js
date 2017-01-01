import { expect } from 'chai';
import { sortRecipes, firstIngredients, firstWords } from './selectors';

describe('Recipe Selectors', () => {

  describe('sortRecipes', () => {
    const mockRecipes = [
      {
        id: 2,
        name: 'B',
        author: 'John Lennon',
        ingredients: ['one', 'two', 'three'],
        directions: 'Mix well. Chill.'
      },
      {
        id: 4,
        name: 'D',
        author: 'Paul McCartney',
        ingredients: ['one', 'two', 'three'],
        directions: 'Mix in bowl. Cook for 1 hour.'
      },
      {
        id: 1,
        name: 'A',
        author: 'George Harrison',
        ingredients: ['one', 'two', 'three'],
        directions: 'Combine ingredients.'
      },
      {
        id: 3,
        name: 'C',
        author: 'Ringo Starr',
        ingredients: ['one', 'two', 'three'],
        directions: 'D is an unnamed extra.'
      }
    ];

    it('should return recipe array sorted by name', () => {
      const sortedRecipes = sortRecipes(mockRecipes);

      expect(sortedRecipes[0].id).to.equal(1);
      expect(sortedRecipes[1].id).to.equal(2);
      expect(sortedRecipes[2].id).to.equal(3);
      expect(sortedRecipes[3].id).to.equal(4);
    });
  });

  describe('firstIngredients', () => {
    const ingredients = [
      '1 c. spinach',
      '1 c. almonds',
      '1 lb. butter',
      '1 tsp. salt',
      '1/8 tsp. pepper'
    ];

    it('should return the first three ingredients, by default, as a common-separated string', () => {
      const firstThreeIngredients = firstIngredients(ingredients);

      expect(firstThreeIngredients).to.contain(`${ingredients[0]}, `);
      expect(firstThreeIngredients).to.contain(`${ingredients[1]}, `);
      expect(firstThreeIngredients).to.contain(`${ingredients[2]}`);
      expect(firstThreeIngredients).not.to.contain(`${ingredients[3]}`);
      expect(firstThreeIngredients).not.to.contain(`${ingredients[4]}`);
      expect(firstThreeIngredients.substr(-3)).to.equal('...');
    });

    it('should return the first n requested ingredients', () => {
      const n = 2;
      const firstTwoIngredients = firstIngredients(ingredients, n);

      expect(firstTwoIngredients).to.contain(`${ingredients[0]}, `);
      expect(firstTwoIngredients).to.contain(`${ingredients[1]}`);
      expect(firstTwoIngredients).not.to.contain(`${ingredients[2]}`);
      expect(firstTwoIngredients).not.to.contain(`${ingredients[3]}`);
      expect(firstTwoIngredients).not.to.contain(`${ingredients[4]}`);
      expect(firstTwoIngredients.substr(-3)).to.equal('...');
    });

    it('should return all the ingredients when more all requested than exist', () => {
      const n = 6;
      const firstTwoIngredients = firstIngredients(ingredients, n);

      expect(firstTwoIngredients).to.contain(`${ingredients[0]}, `);
      expect(firstTwoIngredients).to.contain(`${ingredients[1]}, `);
      expect(firstTwoIngredients).to.contain(`${ingredients[2]}, `);
      expect(firstTwoIngredients).to.contain(`${ingredients[3]}, `);
      expect(firstTwoIngredients).to.contain(`${ingredients[4]}`);
      expect(firstTwoIngredients.substr(-3)).not.to.equal('...');
    });
  });

  describe('firstWords', () => {
    const directions = 'Sauteed mushrooms in oil for 2 minutes. Mix in bowl. Pour in casserole dish. Cook for 1 hour.';

    it('should return the first 10 words by default', () => {

      const truncatedDirections = firstWords(directions);

      expect(truncatedDirections.substr(0, 7)).to.equal('Sauteed');
      expect(truncatedDirections.substr(-9)).to.equal(' bowl....');
    });

    it('should return the first n requested words', () => {
      const n = 5;

      const truncatedDirections = firstWords(directions, n);

      expect(truncatedDirections.substr(0, 7)).to.equal('Sauteed');
      expect(truncatedDirections.substr(-7)).to.equal(' for...');
    });

    it('should just return text too short to truncate, without ellipses', () => {
      const shortDirections = 'Mix well. Bake.';

      const truncatedDirections = firstWords(shortDirections);

      expect(truncatedDirections).to.equal(shortDirections);
    });
  });
});
