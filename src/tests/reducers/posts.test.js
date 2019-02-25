import postsReducer from '../../reducers/posts';
import posts from '../fixtures/posts';

test('should set default state', () => {
  const action = {
    type: '@@INIT',
  };
  const state = postsReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should add new post to posts state', () => {
  const action = {
    type: 'ADD_POST',
    post: posts[0],
  };
  const state = postsReducer(undefined, action);
  expect(state).toEqual([posts[0]]);
});

test('should edit post by id from posts array', () => {
  const updates = {
    title: 'updatedTitle',
    description: 'updatedDescription',
  };
  const action = {
    type: 'EDIT_POST',
    id: posts[0].id,
    updates,
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual([
    {
      ...posts[0],
      ...updates,
    },
    posts[1],
    posts[2],
  ]);
});

test('should remove post by id from state', () => {
  const action = {
    type: 'REMOVE_POST',
    id: posts[0].id,
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual([
    posts[1],
    posts[2],
  ]);
});

test('should not remove post if id not found', () => {
  const action = {
    type: 'REMOVE_POST',
    id: '777',
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual(posts);
});
