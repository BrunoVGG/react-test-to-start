import React, { Component } from 'react';
import Comment from './CommentItem';
import './Style.scss';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      comments: [],
      noMessage: false,
      user: {
        name: 'Bruno Gomes',
        email: 'b.veigagg@gmail.com',
        avatar: 'http://placekitten.com/50/50'
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({noMessage: false});

    if (this.state.message) {
      const data = new Date();
    
      let newComment = {
        user: this.state.user,
        message: this.state.message,
        date: `${data.getDay()}/${data.getMonth()}/${data.getYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
      } 
  
      this.state.comments.push(newComment);
      this.setState({comments: this.state.comments});
      this.state.message = '';
    } else {
      this.setState({noMessage: true});
    }
  }

  render() {

    return (
      <div className="App">
        <div className="detailBox">
          <div className="titleBox">
            <label>Comments</label>
          </div>
          <div className="commentBox">
            <form onSubmit={this.handleSubmit}>
            <textarea
              value={this.state.message} 
              onChange={this.handleChange}
              className="form-control"
            />
            <div className={!this.state.noMessage ? 'hidden' : ''}>
              <div className="alert alert-danger">
                Say something... =(
              </div>
             </div>
             <button className="btn btn-success" type="submit">Send</button>
            </form> 
          </div>
          <div className="actionBox">
              <ul className="commentList">
              {this.state.comments.map(function(comment, i){
                return (<Comment key={i} comment={comment}/>)
              })} 
              </ul>
          </div>
      </div>
      </div>
    );
  }
}

export default CommentForm;
