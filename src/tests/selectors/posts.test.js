import moment from 'moment';
import selectPosts from '../../selectors/posts';
import posts from '../fixtures/posts';

test('should filter by text value', () => {
  const filters = {
    text: 'a',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectPosts(posts, filters);
  expect(result).toEqual([posts[0]]);
});

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectPosts(posts, filters);
  expect(result).toEqual([
    posts[2],
    posts[0],
    posts[1],
  ]);
});

test('should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectPosts(posts, filters);
  expect(result).toEqual([
    posts[1],
    posts[2],
    posts[0],
  ]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).subtract(2, 'days'),
    endDate: undefined,
  };
  const result = selectPosts(posts, filters);
  expect(result).toEqual([
    posts[2],
    posts[0],
  ]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).subtract(2, 'days'),
  };
  const result = selectPosts(posts, filters);
  expect(result).toEqual([
    posts[1],
  ]);
});
