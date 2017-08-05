export default {
  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();
    const adminPage = client.page.adminPage();

    loginPage
      .navigate()
      .login(process.env.KR_EMAIL, process.env.KR_PASSWORD);

    adminPage.waitForElementVisible('@adminPageTable');
    adminPage.expect.element('@adminPageTable').text.to.contain('Action');

    client.end();
  }
};
