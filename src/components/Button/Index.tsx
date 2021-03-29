import React from 'react'
import style from './style.module.less'
interface IProps {
  onClickButton: Function,
  children: any,
  type?: 'primary' | 'danger' | 'dashed',
  size?: 'small' | 'large',
  icon?: string
}

const Button = (props: IProps) =>{
  const { onClickButton, children, type, size, icon } = props;
  
  return (
    <>
      <button 
        onClick={onClickButton}
        type={type || 'default'}
        size={size || 'default'}
        className={`${style['btn-'+type]} ${style.btn} ${style['btn-'+size]}`}
        >
        {
          icon && <i className={style.iconfont}>{icon}</i>
        }
        <span> {children}</span>
      </button>
    </>
  )
}
export default React.memo(Button)