import React, { Fragment } from 'react'
import styles from './AddItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CustomSelectType from './TypeDevice'

export const AddItem = () => {
  return (
    <Fragment>
    <div className={styles.container}>
        <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Thiết bị</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbCate}>Danh sách thiết bị</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Thêm thiết bị</h2>
        </div>
        <div className={styles.listDevice}>
            <h2 className={styles.listDeviceTitle}>Quản lý thiết bị</h2>
        </div>
        <div className={styles.content}>
            <h2 className={styles.contentTitle}>Thông tin thiết bị</h2>
            <div className={styles.Flex_input}>
                <div className={styles.inputLeft}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="idDevice">Mã thiết bị: <span>*</span></label>
                        <input type="text" className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder="Mã thiết bị" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="nameDevice">Tên thiết bị: <span>*</span></label>
                        <input type="text" className="form-control" id="nameDevice" aria-describedby="emailHelp" placeholder="Tên thiết bị" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="ipAddress">Địa chỉ IP: <span>*</span></label>
                        <input type="text" className="form-control" id="ipAddress" aria-describedby="emailHelp" placeholder="Địa chỉ IP" />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="typeDevice">Loại thiết bị: <span>*</span></label>
                        <CustomSelectType />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Tên đăng nhập: <span>*</span></label>
                        <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Tên đăng nhập" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="userPassword">Mật khẩu: <span>*</span></label>
                        <input type="text" className="form-control" id="userPassword" aria-describedby="emailHelp" placeholder="Mật khẩu" />
                    </div>
                </div>
            </div>
            <div className={`form-group ${styles.useService}`}>
                <label className={styles.labelName} htmlFor="usedService">Dịch vụ sử dụng: <span>*</span></label>
                <input type="text" className="form-control" id="usedService" aria-describedby="emailHelp" placeholder="Dịch vụ sử dụng" />
                <small  id="usedService" className={`form-text text-muted ${styles.requireTitle}`}><span>*</span> Là trường thông tin bắt buộc.</small>
            </div>
            <div className={styles.btnActions}>
                <button className={styles.cancel}>Hủy bỏ</button>
                <button className={styles.addItem}>Thêm thiết bị</button>
            </div>
        </div>
    </div>
    </Fragment>
  )
}
