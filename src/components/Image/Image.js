import React from 'react';
import "./Image.css";

const Image = ({name, image, onClick}) =>
          <img 
             className="click-image"
             src={image}
             alt={name}
             name={name}
             onClick = { () => onClick(name)}
             />;

export default Image;
