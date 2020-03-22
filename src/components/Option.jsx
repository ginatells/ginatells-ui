import React from 'react';

const Option = props => {
    return (
        <div className={`background-${props.color}`}>
            <p>{props.text}</p>
        </div>
    );
};

export default Option;