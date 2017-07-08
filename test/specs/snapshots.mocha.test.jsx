import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../../src/animatedButton.jsx';

require('mocha-snapshots');

describe('<MyComponent />', () => {
  it('should match snapshot', () => {
    // const wrapper = shallow(<Button />)
    // expect(wrapper).to.matchSnapshot();
    // // expect('you can match strings').to.matchSnapshot();
    // // expect({ a: 1, b: { c: 1 } }).to.matchSnapshot(); // or any object
    // // expect(123).to.matchSnapshot(); // and numbers too
    expect(2).to.equal(2);
  });
});
