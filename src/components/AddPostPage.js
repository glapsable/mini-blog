import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/posts';
import PostForm from './PostForm';

export class AddPostPage extends React.Component {
  onSubmit = (post) => {
    const { addPostDispatch, history } = this.props;
    addPostDispatch(post);
    history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Post Page</h1>
        <PostForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

AddPostPage.propTypes = {
  addPostDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = dispatch => ({
  addPostDispatch: post => dispatch(addPost(post)),
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
