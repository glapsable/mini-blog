import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should generate initial state', () => {
  const action = {
    type: '@@INIT',
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should generate new state with SET_TEXT_FILTER', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'testText',
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(action.text);
});

test('should set new state with SORT_BY_AMOUNT', () => {
  const action = {
    type: 'SORT_BY_AMOUNT',
  };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

test('should set new state with SORT_BY_DATE', () => {
  const oldState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = {
    type: 'SORT_BY_DATE',
  };
  const state = filtersReducer(oldState, action);
  expect(state.sortBy).toBe('date');
});

test('should set new state with SET_START_DATE', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(0),
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(action.startDate);
});

test('should set new state with SET_END_DATE', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0),
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(action.endDate);
});
