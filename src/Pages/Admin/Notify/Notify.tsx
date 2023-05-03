import React from 'react'
import styles from './Notify.module.css'

export const Notify = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.userNotify}>
            <h4 className={styles.info}>Người dùng: Nguyễn Thị Thùy Dung</h4>
            <p className={styles.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
        </div>
        <hr />
    </div>
  )
}
