import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Button from '../src/animatedButton.jsx';
const { expect } = require('chai');
const { mount } = require('enzyme');


// mount the button
describe('animeButton', () => {
  it('swaps between normal and hover views', () => {
    const wrapper = mount(<Button />);
    // const wrapperz = ReactTestUtils.renderIntoDocument(<div></div>);
    expect(wrapper.find('.normalText')).to.exist;
    expect(wrapper.find('.hoverText')).to.exist;
    // wrapper.simulate('mouseEnter');
  })
})
// check path or non hover
// expect to see hoverTextClassName

// simulate hover

// check path or something to back up hover
// expect to see normalTextClassName
