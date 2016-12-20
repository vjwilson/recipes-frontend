import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from './App'; //eslint-disable-line import/no-named-as-default

describe('App component', function() {

  describe('initial render', function() {

    it('should render the component', function() {
      const shallowOutput = shallow(<App />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render any children passed in as props', function() {
      const wrapper = mount(
        <App>
          <header>Headline</header>
          <article>Foo</article>
          <footer>Copyright</footer>
        </App>
      );

      expect(wrapper.children()).to.have.length(3);
      expect(wrapper.childAt(1).text()).contains('Foo');
    });
  });
});
