export default {
  'Home shows recipe list': (client) => {
    const homePage = client.page.homePage();

    homePage
      .navigate();

    homePage.expect.section('@homePageRecipeList').to.be.visible;

    const cardSection = homePage.section.homePageRecipeList;
    cardSection.expect.element('@cards').to.be.visible;
    cardSection.expect.element('@cards').text.to.contain('sugar');

    client.end();
  },

  'Home has search field': (client) => {
    const homePage = client.page.homePage();

    homePage
      .navigate()
      .search('basil');

    const cardSection = homePage.section.homePageRecipeList;
    cardSection.expect.element('@cards').to.be.visible;

    client.end();
  }
};
