import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App.jsx';

describe('App', () => {

  it('should contain an <h1> tag with recognizable text', () => {
    const wrapper = shallow(<App />);
    const h1 = wrapper.find('h1');
    const result = h1.text();
    
    expect(result).toBe('Successful App rendering test');
  });
});