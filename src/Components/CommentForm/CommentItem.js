import React, { Component } from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      comments: []
    };
  }

  render() {
    return (
      <li>
        <div className="commenterImage">
          <img src={ this.props.comment.user.avatar } />
        </div>
        <div className="commentText">
            <p className="">{ this.props.comment.message } </p> 
            <span className="date sub-text">on { this.props.comment.date }</span>
        </div>
      </li>
    );
  }
}

export default CommentItem;
