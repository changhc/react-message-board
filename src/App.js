import React, { Component } from 'react';
import CommentContainer from './CommentContainer';
import InputAreaContainer from './InputAreaContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
    this.renderComment = this.renderComment.bind(this);
  }

  componentDidMount() {
    window.fetch('http://localhost:5000/api/comments', {
      method: 'GET',
      mode: 'cors',
      headers: { Accept: 'application/json' },
    }).then(res => res.json(),
    ).then((body) => {
      console.log(body);
      this.setState({ comments: body.child });
    }).catch((err) => {
      console.error(err);
    });
  }

  renderComment(commentObj, index) {
    return (
      <CommentContainer
        key={`${commentObj.parentId}-${index}`}
        obj={commentObj}
        renderComment={this.renderComment}
        reload={() => window.location.reload(true)}
      />
    );
  }

  render() {
    return (
      <div>
        <InputAreaContainer
          id={`${this.state.comments.length}`}
          parentId="root"
          reload={() => window.location.reload(true)}
        />
        {this.state.comments.map(this.renderComment)}
      </div>
    );
  }
}

export default App;
