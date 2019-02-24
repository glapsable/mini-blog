import { addPost, editPost, removePost } from '../../actions/posts';
import posts from '../fixtures/posts';

test('should generate addPost action object with default', () => {
  const action = addPost();
  expect(action).toEqual({
    type: 'ADD_POST',
    post: {
      id: expect.any(String),
      title: '',
      amount: 0,
      createdAt: 0,
      description: '',
    },
  });
});

test('should generate addPost action object with given data', () => {
  const postData = {
    title: posts[0].title,
    description: posts[0].description,
    amount: posts[0].amount,
    createdAt: posts[0].createdAt,
  };
  const action = addPost(postData);
  expect(action).toEqual({
    type: 'ADD_POST',
    post: {
      id: expect.any(String),
      ...postData,
    },
  });
});

test('should generate editPost action object', () => {
  const id = 'ddd';
  const updates = {
    title: 'titleTest',
    description: 'descriptionTest',
  };
  const action = editPost(id, updates);
  expect(action).toEqual({
    type: 'EDIT_POST',
    id,
    updates,
  });
});

test('should generate removePost action object with given id', () => {
  const id = 'eee';
  const action = removePost({ id });
  expect(action).toEqual({
    type: 'REMOVE_POST',
    id,
  });
});

test('should generate removePost action object with invalid id', () => {
  const action = removePost();
  expect(action).toEqual({
    type: 'REMOVE_POST',
    id: undefined,
  });
});
