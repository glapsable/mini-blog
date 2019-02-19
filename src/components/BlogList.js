import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
  posts: state.posts,
});

export default connect(mapStateToProps)(BlogList);
