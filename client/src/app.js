import React from 'react';

import Button from './components/animatedButton';

const App = () => (
  <div>
    <Button
    strokeColor="blue"
    fill="pink"
    fillRule="nonzero"
    buttonText="test"
    width="360"
    pathAnimationProps={{
      "elasticity":"100",
      "translateX":"2",
      "translateY":"2"
    }}
    textAnimationProps={{
      "duration":"3000",
      "scale":"3",
      "translateX":"50"
    }}
    />
  </div>
);


export default App;
