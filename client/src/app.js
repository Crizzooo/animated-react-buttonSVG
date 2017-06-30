import React from 'react';

import Button from './components/animatedButton';
import './appStyle.scss';

const App = () => (
  <div>
    <Button
    strokeColor="blue"
    fill="pink"
    fillRule="nonzero"
    buttonText="test"
    width="360"
    pathAnimationProps={{
      "elasticity":"600",
      "translateX":"2",
      "translateY":"2",
      "duration":"3000"
    }}
    textAnimationProps={{
      "duration":"3000",
      "scale":"3",
      "elasticity":"100"
    }}
    hoverTextClassName="textStyle"
    animatedText="hello!"
    />
  </div>
);


export default App;
