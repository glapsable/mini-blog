export const addPost = (postData = {}) => {
  const {
    title = '',
    createdAt = 0,
    amount = 0,
    description = '',
  } = postData;
  const post = {
    title, createdAt, amount, description,
  };
  return {
    type: 'ADD_POST',
    post,
  };
};

export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id,
});

export const editPost = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
