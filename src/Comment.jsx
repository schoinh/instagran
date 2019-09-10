import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  var CommentStyles = {
    padding: "15px",
    fontFamily: "sans-serif"
  }

  return (
    <span style={CommentStyles}><br /><b>schoinh</b> {props.commentText}</span>
  );
}

Comment.propTypes = {
  commentText: PropTypes.string
};

export default Comment;