import React from 'react';
import { shallow } from 'enzyme';
import { EditPostPage } from '../../components/EditPostPage';
import posts from '../fixtures/posts';

let editPostDispatch;
let removePostDispatch;
let history;
let wrapper;

beforeEach(() => {
  editPostDispatch = jest.fn();
  removePostDispatch = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditPostPage
      editPostDispatch={editPostDispatch}
      history={history}
      post={posts[2]}
      removePostDispatch={removePostDispatch}
    />,
  );
});

test('should render EditPostPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editPost', () => {
  const updates = {
    title: 'titleTest',
    description: 'titleDescription',
  };
  wrapper.find('PostForm').prop('onSubmit')(updates);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editPostDispatch).toHaveBeenLastCalledWith(posts[2].id, updates);
});

test('should handle onRemove', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removePostDispatch).toHaveBeenLastCalledWith({ id: posts[2].id });
});
