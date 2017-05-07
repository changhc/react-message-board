import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputArea.css';

const InputArea = props => (
  <div className={styles.inputArea}>
    <div>
      <textarea rows="5" cols="60" placeholder="Your comments..." onChange={event => props.bodyChanged(event.target.value, 'body')} />
    </div>
    <button className={styles.button} onClick={props.submit}>Submit</button>
  </div>
);

InputArea.propTypes = {
  submit: PropTypes.func.isRequired,
  bodyChanged: PropTypes.func.isRequired,
};

export default InputArea;
