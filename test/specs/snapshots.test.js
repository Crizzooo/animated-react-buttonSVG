import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {
  it('should match snapshot', () => {
    // const wrapper = shallow(<MyComponent />)
    // expect(wrapper).to.matchSnapshot();
    // expect('you can match strings').to.matchSnapshot();
    // expect({ a: 1, b: { c: 1 } }).to.matchSnapshot(); // or any object
    // expect(123).to.matchSnapshot(); // and numbers too
    expect(1).to.equal(1);
  });
});
