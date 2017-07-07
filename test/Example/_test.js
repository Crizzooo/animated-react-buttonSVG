var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var Button = require('../../src/animatedButton.jsx');

const { expect } = require('chai');

describe('animeButton', () => {
  it('swaps between normal and hover views', () => {
    const wrapper = ReactTestUtils.renderIntoDocument(<Button />); // <-- is Composite Component
    let container = ReactDOM.findDOMNode(wrapper); // <-- is DOM Component
    expect(container).to.exist;

    // Test Normal State & View
    expect(wrapper.state.inButton).to.be.false;
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(wrapper, 'normalText')).to.exist;
    expect(ReactTestUtils.scryRenderedDOMComponentsWithClass(wrapper, 'hoverText')).to.have.length(0);

    // Simulate Mouse Enter
    ReactTestUtils.Simulate.mouseEnter(container);

    // Test Hover State & View
    expect(wrapper.state.inButton).to.be.true;
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(wrapper, 'hoverText')).to.exist;
    expect(ReactTestUtils.scryRenderedDOMComponentsWithClass(wrapper, 'normalText')).to.have.length(0);
  })
})
