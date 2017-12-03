import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Pill from './Pill';

describe('Pill component', function() {
  it('should render the static component', function() {
    const shallowOutput = shallow(<Pill>Dessert</Pill>);

    expect(shallowOutput).to.have.length(1);
  });

  it('should render its children text nodes', function() {
    const shallowOutput = shallow(<Pill>Dessert</Pill>);

    expect(shallowOutput.text()).to.equal('Dessert');
  });
});
