import React, { Component } from 'react';
import Comment from './Comment';
import './Style.scss';

class FormComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      comments: [],
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

    const data = new Date();
    
    let newComment = {
      user: this.state.user,
      message: this.state.message,
      date: `${data.getDay()}/${data.getMonth()}/${data.getYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
    }

    this.state.comments.push(newComment);
    this.setState({comments: this.state.comments});
    this.state.message = '';
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

export default FormComment;
