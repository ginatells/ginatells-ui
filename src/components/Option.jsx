import React from 'react';

const Option = props => {
  return (
    <li id={props.id} key={props.position} className={`list-group-item background-${props.color}`}>
      {props.text}
    </li>
  );
};

export default Option;