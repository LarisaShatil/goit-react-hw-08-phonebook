import React from "react";

import s from './FlexContainer.module.css';

const FlexContainer = ({ children }) => {
  return (
    <div className={s.flex_container}>
      {children}
    </div>
  )
};


export default FlexContainer;