const homePageCommands = {
  search(textToFind) {
    return this
      .waitForElementVisible('@homePageSearchField')
      .setValue('@homePageSearchField', textToFind);
  }
};

export default {
  url: 'https://kirkpatrick-recipes.surge.sh',
  commands: [homePageCommands],
  elements: {
    homePageSearchField: {
      selector: '#searchString'
    }
  },
  sections: {
    homePageRecipeList: {
      selector: '.card-container',
      elements: {
        cards: {
          selector: '.card'
        }
      }
    }
  }
};
