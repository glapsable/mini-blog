import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      filters: filtersReducer,
    }),
    composeWithDevTools(),
  );

  return store;
};
