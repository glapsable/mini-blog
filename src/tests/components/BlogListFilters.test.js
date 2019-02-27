import React from 'react';
import { shallow } from 'enzyme';
import { BlogListFilters } from '../../components/BlogListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setStartDateDispatch;
let setEndDateDispatch;
let setTextFilterDispatch;
let sortByDateDispatch;
let sortByAmountDispatch;
let wrapper;

beforeEach(() => {
  setStartDateDispatch = jest.fn();
  setEndDateDispatch = jest.fn();
  setTextFilterDispatch = jest.fn();
  sortByDateDispatch = jest.fn();
  sortByAmountDispatch = jest.fn();
  wrapper = shallow(
    <BlogListFilters
      filters={filters}
      setStartDateDispatch={setStartDateDispatch}
      setEndDateDispatch={setEndDateDispatch}
      setTextFilterDispatch={setTextFilterDispatch}
      sortByDateDispatch={sortByDateDispatch}
      sortByAmountDispatch={sortByAmountDispatch}
    />,
  );
});

test('should render BlogListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render BlogList Filters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'inputTesting';
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value,
    },
  });
  expect(setTextFilterDispatch).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({ filters: altFilters });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDateDispatch).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmountDispatch).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const { startDate } = altFilters;
  const { endDate } = altFilters;
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate,
    endDate,
  });
  expect(setStartDateDispatch).toHaveBeenLastCalledWith(startDate);
  expect(setEndDateDispatch).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus change', () => {
  const calendarFocused = 'startDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
