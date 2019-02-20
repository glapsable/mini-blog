import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectPosts from '../selectors/posts';
import BlogListItem from './BlogListItem';

const BlogList = (props) => {
  const { posts } = props;
  return (
    <div>
      {
        posts.length === 0 ? (
          <p>There no posts</p>
        ) : (
          posts.map(post => (
            <BlogListItem {...post} key={post.id} />
          ))
        )
      }
    </div>
  );
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  posts: selectPosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(BlogList);
