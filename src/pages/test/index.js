import React from 'react'
import style from './index.module.less'
import Address from '@/assets/address.png'

const Index = () => {
  return (
    <div className={style.box}>
      <div className={style.header}>Header</div>
      <div className={style.container}>
        <div className={style.left}>Left
          <img src={Address} alt="address" className={style.iconAddress}/>
        </div>
        <div className={style.center}>center</div>
        <div className={style.right}>right</div>
      </div>
      <div className={style.footer}>Footer</div>
    </div>
  )
}
export default Index
