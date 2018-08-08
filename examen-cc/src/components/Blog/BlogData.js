import React from 'react';
import PropTypes from 'prop-types';

const BlogData = ({commits}) =>(
  <div className="blogContent">
    <ul>
      <li className="top">{commits} commits to <span>production</span></li>
      {}
      <li className="bottom">6 more commits >></li>
    </ul>
  </div>
);

BlogData.propTypes = {
  commits: PropTypes.number,
}
BlogData.defaultProps = {
  commits: 2,
};
export default BlogData;
