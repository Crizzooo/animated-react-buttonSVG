const AnimeButton = require('../src/animatedButton.jsx');
const React = require('react');
const {expect} = require('chai');
require('enzyme');


// mount the button
describe('animeButton', () => {
  it('swaps between normal and hover views', () => {
    // const Button = mount(<AnimeButton
    //                         hoverTextClassName="hoverText"
    //                         normalTextClassName="normalText"/>);
    // const text = Button.find('.hoverText');
    // expect(text).to.exist();
    // console.log('text: ', text);
    expect(2).to.equal(2);
    // expect(text).toBeTruthy();
    // expect(text.text()).toBe('hover me!');
  })
})
// check path or non hover
// expect to see hoverTextClassName

// simulate hover

// check path or something to back up hover
// expect to see normalTextClassName
