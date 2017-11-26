import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { RecipeEditPage } from './RecipeEditPage';
import RecipeForm from './RecipeForm';

describe('RecipeEditPage component', function() {
  let props;

  const mockRecipe = {
    id: 9,
    name: 'D',
    author: 'Paul McCartney',
    ingredients: ['one', 'two', 'three'],
    directions: 'Mix in bowl. Cook for 1 hour.'
  };

  beforeEach(function() {
    props = {
      match: {
        params: {
          id: mockRecipe.id
        }
      }
    };

    fetchMock.get('*', mockRecipe);
    fetchMock.post('*', mockRecipe);
    fetchMock.put('*', mockRecipe);
  });

  afterEach(function() {
    fetchMock.restore();
  });

  describe('initial render', function() {

    it('should render the static component', function() {
      const shallowOutput = shallow(<RecipeEditPage {...props} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should contain a title with an appropriate name', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);

      expect(wrapper.find('h1').text()).to.contain('Edit Recipe');
    });

    it('should a contain a RecipeForm component', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      const secondChild = wrapper.childAt(1);

      expect(secondChild.type()).to.equal(RecipeForm);
    });
  });

  describe('integration tests', function() {
    it('should update the state of a form component', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      const changeEvent =  {
        target: {
          name: 'name',
          value: 'Cake'
        }
      };

      const nameField = wrapper.find('[name="name"]');
      nameField.simulate('change', changeEvent);

      expect(wrapper.state().recipe.name).to.equal(changeEvent.target.value);
    });

    it('should add an ingredient to the recipe ingredient list in the form', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      const newIngredient = 'Sugar';

      wrapper.instance().addIngredient(newIngredient);

      const currentIngredients = wrapper.state().recipe.ingredients;
      expect(currentIngredients).to.have.lengthOf(1);
      expect(currentIngredients[0]).to.equal(newIngredient);
    });

    it('should remove an ingredient from the recipe ingredient list in the form', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      wrapper.setState({ recipe: {
        ingredients: [
          'Sugar',
          'Flour'
        ]
      }});
      const ingredientToRemove = 'Sugar';

      wrapper.instance().removeIngredient(ingredientToRemove);

      const currentIngredients = wrapper.state().recipe.ingredients;
      expect(currentIngredients).to.have.lengthOf(1);
      expect(currentIngredients.includes(ingredientToRemove)).to.be.false;
    });

    it('should validate the recipe', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      wrapper.setState({ recipe: {
        name: '',
        author: '',
        ingredients: [],
        directions: ''
      }});

      const isValid = wrapper.instance().recipeIsValid();

      expect(isValid).to.be.false;
      const errors = wrapper.state().errors;
      expect(Object.keys(errors)).to.have.lengthOf(3);
    });

    it('should not save the recipe if it is not valid', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      // author name is missing
      wrapper.setState({ recipe: {
        name: 'Cake',
        author: '',
        ingredients: [],
        directions: 'Bake'
      }});

      wrapper.instance().saveRecipe({ preventDefault: () => {} });

      expect(fetchMock.called('/recipes')).to.be.false;
    });

    it('should save the recipe if it is valid', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      wrapper.setState({ recipe: {
        id: 9,
        name: 'Cake',
        author: 'Julia Child',
        ingredients: [],
        directions: 'Bake for one hour.'
      }});

      wrapper.instance().saveRecipe({ preventDefault: () => {} });

      const lastCall = fetchMock.lastCall();
      expect(lastCall[1].method).to.equal('put');
    });
  });
});
