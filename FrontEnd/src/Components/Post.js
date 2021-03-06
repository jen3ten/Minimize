import React, { Component } from 'react';

class Post extends Component {
  deleteBook = id => {
    fetch(`https://localhost:44387/api/post/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          console.log('Deleting  post');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    const {
      postId,
      totalItems,
      removedItems,
      postDescription,
      postImgPath
    } = this.props.post;
    return (
      <li>
        <h4>Post Number: {this.props.post.postId}</h4>
        <p>Total Items: {totalItems}</p>
        <p>Removed Items: {removedItems}</p>
        <p>Description: {postDescription}</p>
        <img src={postImgPath} />
        <button onClick={this.deleteBook(postId)}>Delete</button>
      </li>
    );
  }
}

export default Post;
