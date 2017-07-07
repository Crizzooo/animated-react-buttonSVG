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
    console.log(typeof Button);
    console.log(Button);
    console.log(ReactTestUtils.isElement(<Button />));
    const wrapper = ReactTestUtils.renderIntoDocument(<Button />);
    console.log(ReactTestUtils.isDOMComponent(wrapper));
    let container = ReactDOM.findDOMNode(wrapper);
    expect(container).to.exist;

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
    // ReactTestUtils.Simulate.mouseEnter(container);
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
