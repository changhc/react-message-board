import React from 'react';
import PropTypes from 'prop-types';
import InputAreaContainer from './InputAreaContainer';
import style from './Comment.css';

const Comment = props => (
  <div className={style.comment}>
    <div>
      <div>
        <div>{new Date(props.obj.timestamp).toLocaleString()}</div>
        <div>ID: {props.obj.author}</div>
        <div>{props.obj.body}</div>
        <a className={style.textButton} onClick={props.click}>{props.display ? 'Cancel' : 'Reply'}</a>
        {props.display ? <InputAreaContainer parentId={props.obj.id} id={`${props.obj.id}-${props.obj.child.length}`} reload={props.reload} /> : null }
      </div>
      {props.obj.child.map(props.renderComment)}
    </div>
  </div>
);

const commentType = {
  id: PropTypes.string,
  timestamp: PropTypes.number,
  author: PropTypes.string,
  body: PropTypes.string,
};

commentType.child = PropTypes.arrayOf(PropTypes.shape(commentType)).isRequired;

Comment.propTypes = {
  renderComment: PropTypes.func.isRequired,
  obj: PropTypes.shape(commentType).isRequired,
  click: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired,
};

export { Comment, commentType };
