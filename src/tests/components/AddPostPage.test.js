import React from 'react';
import { shallow } from 'enzyme';
import { AddPostPage } from '../../components/AddPostPage';
import posts from '../fixtures/posts';

let addPostDispatch;
let history;
let wrapper;

beforeEach(() => {
  addPostDispatch = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPostPage addPostDispatch={addPostDispatch} history={history} />);
});

test('should render AddPostPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addPostDispatch', () => {
  wrapper.find('PostForm').prop('onSubmit')(posts[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addPostDispatch).toHaveBeenLastCalledWith(posts[2]);
});
