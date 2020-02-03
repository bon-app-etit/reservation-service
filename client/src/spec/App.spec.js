import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import Calendar from '../components/Calendar';

describe('App', () => {

  it('should mount the App component', () => {
    const wrap = shallow(<App />);
    expect(wrap).toMatchSnapshot();
  });

  it('should contain an <h2> tag with recognizable text', () => {
    const wrap = shallow(<App />);
    const h2 = wrap.find('h2');
    const result = h2.text();
    expect(result).toBe('Make a Reservation');
  });

  it('should include a button that says "Find a Table"', () => {
    const wrap = shallow(<App />);
    const button = wrap.find('button');
    const result = button.text();
    expect(result).toEqual('Find a Table');
  });

  it('should load a date selector showing the current date', () => {
    const wrap = shallow(<App />);
    const input = wrap.find('input');
    const result = input.text();
    const currentDate = new Date();
    const currentDateString = currentDate.toDateString();
    expect(result).toEqual(currentDateString);
  });

  it('should display a party size selector that contains all party options"', () => {
    const wrap = shallow(<App />);
    const partySelector = wrap.find('select').at(1);
    const result = partySelector.text();
    expect(result).toEqual('1 person2 people3 people4 people5 people6 people');
  });

  it('should not display the calendar when App is first mounted', () => {
    const wrap = shallow(<App />);
    expect(wrap.state('displayCalendar')).toEqual(false);
  });

  it('should change the displayCalendar state of App when the date input is clicked', () => {
    const wrap = shallow(<App />);
    wrap.find('input').simulate('click');
    expect(wrap.state('displayCalendar')).toEqual(true);
  });

  it('should display the calendar when the displayCalendar state of App is updated', () => {
    const wrap = shallow(<App />);
    wrap.setState({ displayCalendar: true });
    expect(wrap.containsMatchingElement(<Calendar />)).toBeTruthy;
  });

  it('should update the selected date when a calendar date is clicked', () => {
    const wrap = mount(<App />);
    wrap.setState({ displayCalendar: true });
    const dateCell = wrap.find('td').at(9);
    dateCell.simulate('click');
    expect(wrap.state('date')).toEqual('Sat Feb 01 2020');
  });

  it('should stop showing the calender once a calendar date is clicked', () => {
    const wrap = mount(<App />);
    wrap.setState({ displayCalendar: true });
    const filledCell = wrap.find('td').at(9);
    filledCell.simulate('click');
    expect(wrap.state('displayCalendar')).toEqual(false);
  });

  it('should scroll between months when calendar arrows are clicked', () => {
    const wrap = shallow(<Calendar />);
    const rightArrow = wrap.find('div').at(8);
    wrap.setState({ month: 0 });
    rightArrow.simulate('click');
    expect(wrap.state('month')).toEqual(1);
  });
});



//it should update the selected date when a calendar date is clicked

//the calendar should stop showing after a date is clicked

//figure out how to grab by elementID when using CSS mods - how to use find when multiple of the same type

//figure out how to check the default value of an input in a test
