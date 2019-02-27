import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import { editPost, removePost } from '../actions/posts';

export class EditPostPage extends React.Component {
  onEditHandler = (updatedPost) => {
    const { post, editPostDispatch, history } = this.props;
    editPostDispatch(post.id, updatedPost);
    history.push('/');
  };

  onRemoveHandler = () => {
    const { post, history, removePostDispatch } = this.props;
    removePostDispatch({ id: post.id });
    history.push('/');
  };

  render() {
    const { post } = this.props;
    return (
      <div>
        <PostForm
          post={post}
          onSubmit={this.onEditHandler}
        />
        <button
          type="button"
          onClick={this.onRemoveHandler}
        >
          Remove
        </button>
      </div>
    );
  }
}

EditPostPage.propTypes = {
  editPostDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
  }).isRequired,
  removePostDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editPostDispatch: (id, updatedPost) => dispatch(editPost(id, updatedPost)),
  removePostDispatch: id => dispatch(removePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
