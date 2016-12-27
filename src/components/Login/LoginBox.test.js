import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import LoginBox from './LoginBox';

describe('LoginBox component', function() {
  let props;

  beforeEach(function() {
    props = {
      email: '',
      password: '',
      errors: '',
      updateFormField: function() {},
      submitLogin: function() {}
    };
  });

  it('should render the static component', function() {
    const shallowOutput = shallow(<LoginBox {...props} />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should have an appropriate class', function() {
    const shallowOutput = shallow(<LoginBox {...props} />);

    expect(shallowOutput.hasClass('login-box')).to.be.true;
  });

  it('should contain a login form with the approriate elements', function() {
    const mountOutput = mount(<LoginBox {...props} />);

    const emailField = mountOutput.find('input[type="email"]');
    expect(emailField).to.have.lengthOf(1);

    const passwordField = mountOutput.find('input[type="password"]');
    expect(passwordField).to.have.lengthOf(1);

    const submitButton = mountOutput.find('button[type="submit"]');
    expect(submitButton).to.have.lengthOf(1);
    expect(submitButton.text()).to.contain('Login');
  });
});
