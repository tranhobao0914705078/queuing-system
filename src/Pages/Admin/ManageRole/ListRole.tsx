import React, { Fragment } from 'react'
import styles from './ListRole.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const ListRole = () => {
  return (
    <Fragment>
    <div className={styles.container}>
        <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Dịch vụ</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbCate}>Danh sách dịch vụ</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Thêm dịch vụ</h2>
        </div>
        <div className={styles.listDevice}>
            <h2 className={styles.listDeviceTitle}>Quản lý dịch vụ</h2>
        </div>
        <div className={styles.content}>
            <h2 className={styles.contentTitle}>Thông tin dịch vụ</h2>
            <div className={styles.Flex_input}>
                <div className={styles.inputLeft}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="idDevice">Mã dịch vụ: <span>*</span></label>
                        <input type="text" className="form-control" id="idDevice" value="201" aria-describedby="emailHelp" placeholder="Mã dịch vụ" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Mô tả: <span>*</span></label>
                        <textarea className={`form-control ${styles.des}`} id="userName" placeholder="Mô tả dịch vụ" />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Phân quyền chức năng: <span>*</span></label>
                    <div className={styles.options}>
                        <div className={styles.groupA}>
                            <h4 className={styles.optionsA}>Nhóm chức năng A</h4>
                            <div className={`form-check ${styles.customChecked}`}>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Tất cả
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng x
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng y
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng z
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.groupB}>
                            <h4 className={styles.optionsA}>Nhóm chức năng B</h4>
                            <div className={`form-check ${styles.customChecked}`}>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Tất cả
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng x
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng y
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng z
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.btnActions}>
            <button className={styles.cancel}>Hủy bỏ</button>
            <button className={styles.addItem}>Thêm dịch vụ</button>
        </div>
    </div>
    </Fragment>
  )
}
