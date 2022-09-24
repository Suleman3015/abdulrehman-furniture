import React from 'react';
import './index.css';

const title = (props) => {
  return <h1 className='Container'>{props.children}</h1>;
};

export default title;