import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from './App'; //eslint-disable-line import/no-named-as-default

describe('App component', function() {

  describe('initial render', function() {

    it('should render the component', function() {
      const shallowOutput = shallow(<App><div /></App>);

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

      expect(wrapper.children()).to.have.length(4);
      expect(wrapper.childAt(0).text()).contains('Browse');
      expect(wrapper.childAt(2).text()).contains('Foo');
    });
  });
});
