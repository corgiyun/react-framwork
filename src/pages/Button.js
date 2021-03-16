import React from 'react'

function Button({onClickButton, children}) {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  )
}
export default React.memo(Button)