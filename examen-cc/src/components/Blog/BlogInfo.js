import React from 'react';
import PropTypes from 'prop-types';

const BlogInfo = ({name, repo, time, pin}) =>(
  <div className="BlogInfo">
    <span className="post_header_img"><img src="https://picsum.photos/30/30"  width="30" height="30"/></span>
    <p><b> {name} </b> pushed to <b> {repo} </b> <span class="time">{time}</span> </p>
    {(pin) && (
          <span className="pin"><i class="fas fa-link"></i></span>
      )}

  </div>
);

BlogInfo.propTypes = {
  name: PropTypes.string,
  repo: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  pin: PropTypes.bool,
}
BlogInfo.defaultProps = {
  name: "Edgar hernandez",
  repo: "Cultura-Colectiva-Tech",
  time: "25 min ago",
  pin: false,
};

export default BlogInfo;
