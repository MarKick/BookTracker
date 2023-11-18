import React from 'react';
import './text-input-style.css';

const TextField = (props) => {
    const text = props.text;
    return (
        <div>
            <p style={{ fontSize: 15, color: 'white'}}> {text}</p>
            <input />
        </div>
    );
};

export default TextField;