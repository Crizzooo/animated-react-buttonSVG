import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Button from '../src/animatedButton.jsx';

import renderer from 'react-test-renderer';

const { expect } = require('chai');
const { mount } = require('enzyme');


// mount the button
describe('animeButton', () => {
  it('swaps between normal and hover views', () => {
    // const wrapper = mount(<Button />);
    console.log(ReactTestUtils.isElement(<Button/>))
    const wrapper = ReactTestUtils.renderIntoDocument(<Button/>);
    console.log(ReactTestUtils.isDOMComponent(wrapper));
    let container = ReactDOM.findDOMNode(wrapper);

    // expect(wrapper.find('.normalText')).to.exist;
    // expect(wrapper.find('.hoverText')).to.exist;
    //
    //
    // let component = wrapper.find('a');
    // console.log(wrapper.state());
    // console.log(wrapper.getNode().onMouseEnter());
    // wrapper.simulate('mouseEnter');

    // const element = renderer.create(<Button/>, {
    //   createNodeMock: element => ({ nodeType: true})
    // });
    // console.log(Button.prototype);
    // console.log(wrapper);
    ReactTestUtils.Simulate.mouseEnter(container);
    // console.log(wrapper);
    // const mock = ReactTestUtils.mockComponent(<Button/>);
    // console.log(mock);
    // console.log(element.toJSON());
  })
})
// check path or non hover
// expect to see hoverTextClassName

// simulate hover

// check path or something to back up hover
// expect to see normalTextClassName
