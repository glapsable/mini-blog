import uuid from 'uuid';

export const addPost = ({
  title = '',
  amount = 0,
  createdAt = 0,
  description = '',
} = {}) => ({
  type: 'ADD_POST',
  post: {
    id: uuid(),
    title,
    amount,
    createdAt,
    description,
  },
});

export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates,
});

export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id,
});
