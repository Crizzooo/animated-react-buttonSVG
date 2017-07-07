var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var Button = require('../../src/animatedButton.jsx');

// var renderer = require('react-test-renderer');

const { expect } = require('chai');
const { mount } = require('enzyme');


// mount the button
describe('animeButton', () => {
  it('swaps between normal and hover views', () => {
    // const wrapper = mount(<Button />);
    const wrapper = ReactTestUtils.renderIntoDocument(<Button />); // <-- is Composite Component
    let container = ReactDOM.findDOMNode(wrapper); // <-- is DOM Component
    expect(container).to.exist;
    expect(wrapper.state.inButton).to.be.false;
    console.log(ReactTestUtils.findRenderedDOMComponentWithClass(wrapper, 'normalText'));
    // see normal text?
    ReactTestUtils.Simulate.mouseEnter(container);
    expect(wrapper.state.inButton).to.be.true;
    // see hover text?
    let elems = ReactTestUtils.findAllInRenderedTree(wrapper, () => true);
    // findAllInRenderedTree must be a composite component
  })
})
