import AnimeButton from '../src/animatedButton.jsx';
import React from 'react';
import { mount } from 'enzyme';

// describe('Addition', () => {
//   it('knows that 2 and 2 make 4', () => {
//     expect(2 + 2).toBe(4);
//   })
// })

// mount the button
describe('animeButton', () => {
  it('swaps between normal and hover views', () => {
    const Button = mount(<AnimeButton
                            hoverTextClassName="hoverText"
                            normalTextClassName="normalText"/>);
    const text = Button.find('.hoverText');
    expect(text).toBeTruth();
    expect(text.text()).toBe('hover me!');
  })
})
// check path or non hover
// expect to see hoverTextClassName

// simulate hover

// check path or something to back up hover
// expect to see normalTextClassName
