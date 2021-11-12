import React from 'react'
import style from './style.module.less'

interface IProps {
  onClick: () => void,
  children: any,
  attr?: 'primary' | 'danger' | 'dashed',
  size?: 'small' | 'large',
  icon?: string,
}

const Button = ({ ...props }: IProps) => {
  const { onClick, children, attr, size, icon } = props

  return (
    <>
      <button
        onClick={onClick}
        className={`${style['btn-' + attr]} ${style.btn} ${style['btn-' + size]
          }`}
      >
        {icon && <i className={style.iconfont}>{icon}</i>}
        <span> {children}</span>
      </button>
    </>
  )
}
export default React.memo(Button)
