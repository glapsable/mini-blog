import moment from 'moment';
import {
  setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate,
} from '../../actions/filters';

test('should setup text filter action object with given text', () => {
  const text = 'testText';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should setup set text action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should setup sortByAmount actino object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('should setup sortByAmount action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('should setup setStartDate action object', () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate,
  });
});

test('should setup setEndDate action object', () => {
  const endDate = moment(0);
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate,
  });
});
