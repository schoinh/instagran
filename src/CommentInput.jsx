import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function CommentInput(props) {
  let _comment = null;

  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewComment({ commentText: _comment.value, id: v4() });
    _comment.value = '';
  }

  var CommentInputStyles = {
    padding: "15px"
  }

  var postButton = {
    float: "right",
    borderWidth: "0px",
    color: "#038cfc",
    fontSize: "14px",
    fontWeight: "bold"
  }

  var textBox = {
    borderWidth: "0px",
    fontSize: "14px"
  }

  return (
    <form onSubmit={handleNewCommentFormSubmission} style={CommentInputStyles}>
      <input
        type="text"
        placeholder="Add a comment..."
        style={textBox}
        ref={(input) => { _comment = input; }} />
      <button type="submit" style={postButton}>Post</button>
    </form>
  );
}

CommentInput.propTypes = {
  onNewComment: PropTypes.func
};

export default CommentInput;