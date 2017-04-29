import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputArea from './InputArea';

class InputAreaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      parentId: this.props.parentId,
      author: 'Anonymous',
      body: 'Type here',
      child: [],
    };
    this.submit = this.submit.bind(this);
    this.slotChanged = this.slotChanged.bind(this);
  }

  slotChanged(value, slot) {
    switch (slot) {
      case 'author':
        this.setState({ author: value });
        break;
      case 'body':
        this.setState({ body: value });
        break;
      default:
    }
  }

  submit() {
    const comment = this.state;
    comment.timestamp = Date.now();
    window.fetch('http://localhost:5000/api/comments', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    }).then((res) => {
      if (res.status === 202) {
        this.props.reload();
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <InputArea
          submit={this.submit}
          slotChanged={this.slotChanged}
          keyDown={this.keyDown}
          author={this.state.author}
          body={this.state.body}
        />
      </div>
    );
  }
}

InputAreaContainer.propTypes = {
  reload: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default InputAreaContainer;
