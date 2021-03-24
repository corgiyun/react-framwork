import React from 'react'
import style from './style.module.less'
interface IProps {
  onClickButton: Function,
  children: any,
  type?: 'primary' | 'warn' | 'dashed',
  size?: 'small' | 'large',
}

const Button = (props: IProps) =>{
  const { onClickButton, children, type, size } = props;
  return (
    <>
      <button 
        onClick={onClickButton}
        type={type || 'default-type'}
        size={size || 'default-size'}
        className={style.default}
        >
        {children}
      </button>
    </>
  )
}
export default React.memo(Button)