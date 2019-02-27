import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import PostForm from '../../components/PostForm';
import posts from '../fixtures/posts';

test('should render PostForm correctly', () => {
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render PostForm with given post data', () => {
  const wrapper = shallow(<PostForm onSubmit={() => {}} post={posts[2]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<PostForm onSubmit={onSubmitSpy} post={posts[2]} />);
  wrapper.setState({ error: 'Please fill title and description' });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: posts[2].title,
    description: posts[2].description,
    createdAt: posts[2].createdAt,
    amount: posts[2].amount,
  });
});

test('should set title on input change', () => {
  const value = 'titleTest';
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value,
    },
  });
  expect(wrapper.state('title')).toBe(value);
});

test('should set amount on input change', () => {
  const value = '999999';
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value,
    },
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on change if value incorect', () => {
  const value = '999999.999';
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value,
    },
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should set description on textarea change', () => {
  const value = 'descriptionTest';
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  wrapper.find('textarea').simulate('change', {
    target: {
      value,
    },
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set createdAt on SingleDatePicker change', () => {
  const now = moment();
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused on change', () => {
  const focused = true;
  const wrapper = shallow(<PostForm onSubmit={() => {}} />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
