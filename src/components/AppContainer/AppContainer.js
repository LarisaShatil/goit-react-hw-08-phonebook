import React from 'react'

import s from './AppContainer.module.css';

const AppContainer = ({children}) => {
  return (
    <div className={s.container}>{children}</div>
  )
}

export default AppContainer;