import React from 'react';
import './text-input-style.css';
import './div-style.css';

const TextArea = (props) => {
  const text = props.text;
  return ( 
    <div class="div-container">
      <div>
        <p style={{ fontSize: 15, color: 'white'}}> {text}</p>
      </div>
      <div>
        <textarea />
      </div>


    </div>

  );
};

export default TextArea;