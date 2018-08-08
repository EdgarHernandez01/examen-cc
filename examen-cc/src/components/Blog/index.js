import React from 'react';
import PropTypes from 'prop-types';
import BlogData from './BlogData'
import BlogInfo from './BlogInfo'
import './styles.css';

const Blog = ({name, pin, time}) => (
  <div className="posts">
    <div className="post">
      <BlogInfo name={name} pin={pin} time={time}/>
      <BlogData/>
    </div>
  </div>
);

Blog.propTypes = {
  name: PropTypes.string,
  repo: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  pin: PropTypes.bool,
}
Blog.defaultProps = {
  name: "Edgar hernandez",
  repo: "Cultura-Colectiva-Tech",
  repo: "25 min ago",
  pin: false,
};
export default Blog;
