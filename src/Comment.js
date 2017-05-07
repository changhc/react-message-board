import React from 'react';
import PropTypes from 'prop-types';
import InputAreaContainer from './InputAreaContainer';
import styles from './Comment.css';

const Comment = props => (
  <div className={`${styles.comment} ${props.obj.parentId === 'root' ? '' : styles.childComment}`}>
    <div className={styles.commentInner}>
      <div className={`${styles.inline} ${styles.icon}`}>
        <i className={`${styles.fa} fa fa-arrow-up`} aria-hidden="true" />
        <i className={`${styles.fa} fa fa-arrow-down`} aria-hidden="true" />
      </div>
      <div className={styles.inline}>
        <div className={styles.parallelBlock}>
          <div className={styles.parallelBlock}>
            <a className={styles.foldButton}>[-]</a>
            <div className={styles.id}>{props.obj.author}</div>
          </div>
          <div
            className={styles.postTime}
            title={new Date(props.obj.timestamp).toLocaleString()}
          >1 point {props.timeString}</div>
        </div>
        <div className={styles.commentBody}>{props.obj.body}</div>
        <div className={styles.parallelBlock}>
          <a className={styles.textButton} href={`/${props.obj.timestamp}`}>permalink</a>
          <a className={styles.textButton}>embed</a>
          <a className={styles.textButton}>save</a>
          <a className={styles.textButton}>parent</a>
          <a className={styles.textButton}>report</a>
          <a className={`${styles.textButton} ${styles.gold}`} onClick={() => window.alert('Giving gold to ChangHC...')}>give gold</a>
          <a className={styles.textButton} onClick={props.click}>{props.display ? 'cancel' : 'reply'}</a>
        </div>
        {props.display
          ? <InputAreaContainer
            parentId={props.obj.id}
            author={props.author}
            reload={props.reload}
          />
          : null }
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
  timeString: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
};

export { Comment, commentType };
