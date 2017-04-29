import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment, commentType } from './Comment';

class CommentContainer extends Component {
  constructor() {
    super();
    this.state = {
      displayInputArea: false,
    };
    this.replyButtonClick = this.replyButtonClick.bind(this);
  }

  replyButtonClick() {
    this.setState({ displayInputArea: !this.state.displayInputArea });
  }

  render() {
    return (
      <Comment
        obj={this.props.obj}
        display={this.state.displayInputArea}
        renderComment={this.props.renderComment}
        click={this.replyButtonClick}
        reload={this.props.reload}
      />
    );
  }
}

CommentContainer.propTypes = {
  renderComment: PropTypes.func.isRequired,
  obj: PropTypes.shape(commentType).isRequired,
  reload: PropTypes.func.isRequired,
};


export default CommentContainer;
