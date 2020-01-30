import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App.jsx';

describe('App', () => {

  it('should contain an <h2> tag with recognizable text', () => {
    const wrapper = shallow(<App />);
    const h2 = wrapper.find('h2');
    const result = h2.text();
    
    expect(result).toBe('Make a Reservation');
  });
});