import React from 'react';
import PropTypes from 'prop-types';

const keyDown = (event) => {
  const e = event;
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    e.target.blur();
  }
}

const InputArea = props => (
  <div>
    <div>
      <div>Posting as</div>
      <div
        contentEditable
        suppressContentEditableWarning
        onKeyDown={keyDown}
        onBlur={event => props.slotChanged(event.target.textContent, 'author')}
      >{props.author}</div>
    </div>
    <div>
      <textarea rows="3" cols="60" onChange={event => props.slotChanged(event.target.value, 'body')}>{props.body}</textarea>
      <button onClick={props.submit}>Submit</button>
    </div>
  </div>
);

InputArea.propTypes = {
  submit: PropTypes.func.isRequired,
  slotChanged: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default InputArea;
