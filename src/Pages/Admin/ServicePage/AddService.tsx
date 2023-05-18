import React, { Fragment } from 'react'
import { useState } from 'react'
import styles from './AddService.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, onSnapshot, query, where, addDoc } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const AddService = () => {

    const [serviceCode, setServiceCode] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [serviceDes, setServiceDes] = useState("");
    const [serviceStatus, setServiceStatus] = useState(0);
    const colRef = collection(db, "Service");
    const navigate = useNavigate();
    const addService = async () => {
        await addDoc(colRef, {
            service_code: serviceCode,
            service_name: serviceName,
            service_des: serviceDes,
            service_status: serviceStatus
        })
        navigate("/manage-service");
    }
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
                        <input onChange={(e) => setServiceCode(e.target.value)} type="text" className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder="Mã dịch vụ" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="nameDevice">Tên dịch vụ: <span>*</span></label>
                        <input onChange={(e) => setServiceName(e.target.value)} type="text" className="form-control" id="nameDevice" aria-describedby="emailHelp" placeholder="Tên thiết bị" />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Mô tả: <span>*</span></label>
                        <input onChange={(e) => setServiceDes(e.target.value)} type="text" className={`form-control ${styles.des}`} id="userName" placeholder="Mô tả dịch vụ" />
                    </div>
                </div>
            </div>
            <div className={`form-group ${styles.useService}`}>
                <label className={styles.labelName} htmlFor="usedService">Quy tắc cấp số: </label>
                <div className={styles.ruleNumber}>
                    <div className={`form-check ${styles.boxChecked}`}>
                        <input className={`form-check-input ${styles.customChecked}`} type="checkbox" id="flexCheckDefault" />
                        <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
                            Tăng tự động từ:
                        </label>
                    </div>
                    <div className={styles.boxChecked1}>
                        <div className={styles.rangeTitle}>
                            <p>0001</p>
                        </div>
                        <p className={styles.titleBox1}>đến</p>
                        <div className={styles.rangeTitle}>
                            <p>9999</p>
                        </div>
                    </div>
                </div>
                <div className={styles.ruleNumber}>
                    <div className={`form-check ${styles.boxChecked}`}>
                        <input className={`form-check-input ${styles.customChecked}`} type="checkbox" id="flexCheckDefault" />
                        <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
                            Prefix
                        </label>
                    </div>
                      <div className={styles.rangeTitle}>
                        <p>0001</p>
                    </div>
                </div>
                <div className={styles.ruleNumber}>
                    <div className={`form-check ${styles.boxChecked}`}>
                        <input className={`form-check-input ${styles.customChecked}`} type="checkbox" id="flexCheckDefault" />
                        <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
                            Surfix
                        </label>
                    </div>
                    <div className={styles.rangeTitle}>
                        <p>0001</p>
                    </div>
                </div>
                <div className={styles.ruleNumber}>
                    <div className={`form-check ${styles.boxChecked}`}>
                        <input className={`form-check-input ${styles.customChecked}`} type="checkbox" id="flexCheckDefault" />
                        <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
                            Reset mỗi ngày
                        </label>
                    </div>
                </div>
                <small  id="usedService" className={`form-text text-muted ${styles.requireTitle}`}><span>*</span> Là trường thông tin bắt buộc.</small>
            </div>
        </div>
        <div className={styles.btnActions}>
            <button className={styles.cancel}>Hủy bỏ</button>
            <button className={styles.addItem} onClick={addService}>Thêm dịch vụ</button>
        </div>
    </div>
    </Fragment>
  )
}
