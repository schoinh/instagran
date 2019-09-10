import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Photo from './Photo';
import CommentInput from './CommentInput';
import TextContent from './TextContent';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterCommentList: []
    };

    this.handleNewComment = this.handleNewComment.bind(this);

    this.postStyles = {
      width: "600px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#ebe6e0",
      borderRadius: "5px"
    };
  }

  handleNewComment(newComment) {
    var newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.push(newComment);
    this.setState({ masterCommentList: newMasterCommentList });
  }

  render() {
    return (
      <div style={this.postStyles}>
        <Header
          username="jschneidereit" />
        <Photo />
        <TextContent
          commentList={this.state.masterCommentList} />
        <CommentInput
          onNewComment={this.handleNewComment} />
      </div>
    );
  }
}

export default Post;