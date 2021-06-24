import React from 'react';
import PropTypes from 'prop-types';

PostLists.propTypes = {
    posts: PropTypes.array
};

PostLists.defaultPro = {
    posts:[]
}

function PostLists(props) {
    const {posts} = props;

    return (
        <div>
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      );
}

export default PostLists;