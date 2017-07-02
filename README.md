# animated-react-buttonSVG
This is an npm module to install a an animated react button component, inspired by those on the  home page of animejs.com. It has many customizable properties.


## API
The following props are exposed on the imported button component, allowing the user to flexibly customize the animated button.

* strokeWidth              - change the width of the stroke on the svg. Default is 1px
* strokeColor              - change the color of the SVG path, default is 'blue'
* fill                     - fill of the SVG button, default is none
* fillRule                 - fill rule of the SVG button, default is 'evenodd'
* width                    - given value or 180 by default
* height                   - Height is not exposed, but is set to be 1/3 of the given width,
                             which will keep the text centered inside the button
* textStyle                - apply styling to the text in both button states
* buttonHoverTextClassName - apply a class of styles to the text in the animated state
* normalTextClassName      - apply a class of styles to the text in the default state
* buttonText               - the text that will appear in the button in both states by default
* animatedText             - if present, this text will overwrite the buttonText when in hover state
* path                     - pass in a custom SVG path for the normal state
* animatedPath             - pass in a custom SVG path for the animated state
* containerStyle           - pass in custom style object to the button's container element
* pathAnimationProps       - user can pass in their own animation properties to tweak the default animation
* textAnimationProps       - user can pass in their own animation properties to tweak the default animation
* additionalButtonProps    - user can pass in their own props to the svg viewbox that holds the button
