import React, { Fragment } from 'react'
import styles from './NewNumber.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CustomerService from '../ServiceName/CustomerService'

export const NewNumber = () => {
  return (
    <Fragment>
    <div className={styles.container}>
        <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Cấp số</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbCate}>Danh sách cấp số</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Cấp số mơi</h2>
        </div>
        <div className={styles.listDevice}>
            <h2 className={styles.listDeviceTitle}>Quản lý cấp số</h2>
        </div>
        <div className={styles.content}>
            <h2>Cấp số mới</h2>
            <div className={styles.boxNumber}>
                <CustomerService />
            </div>
        <div className={styles.btnActions}>
            <button className={styles.cancel}>Hủy bỏ</button>
            <button className={styles.addItem}>In số</button>
        </div>
        </div>
    </div>
    </Fragment>
  )
}
