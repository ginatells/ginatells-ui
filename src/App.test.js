import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {

  let wrapper;

  const shallowApp = () => {
    if (!wrapper)
        wrapper = shallow(<App/>);
    return wrapper;
};

  beforeEach(() => {  
    wrapper = null;
  });

  it('renders MainPage', () => {
    expect(shallowApp().find('MainPage').exists()).toBe(true);
  });
});
