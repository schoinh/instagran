import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { Link } from 'react-router-dom';

function TextContent(props) {
  var TextContentStyles = {
    width: "570px",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#ebe6e0",
    padding: "15px",
    fontFamily: "sans-serif"
  }

  return (
    <div style={TextContentStyles}>
      <b>jschneidereit</b> You've never heard of the Millennium Falcon?
      <p>
        {props.commentList.map((comment) => <Comment commentText={comment.commentText} key={comment.id} />)}
      </p>
    </div>
  );
}

TextContent.propTypes = {
  commentList: PropTypes.array
};

export default TextContent;