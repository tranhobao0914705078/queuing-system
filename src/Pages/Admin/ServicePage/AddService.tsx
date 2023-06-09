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
    const [serviceStatus, setServiceStatus] = useState(2);
    const [serviceIncrease, setServiceIncrease] = useState({ from: 0, to: 0 });
    const [prefix, setPrefix] = useState(0);
    const [surfix, setSurfix] = useState(0);
    const handleFromChange = (e:any) => {
        setServiceIncrease((prevValue) => ({
          ...prevValue,
          from: e.target.value,
        }));
    };
    const handleToChange = (e:any) => {
        setServiceIncrease((prevValue) => ({
          ...prevValue,
          to: e.target.value,
        }));
    };
    const colRef = collection(db, "Service");
    const navigate = useNavigate();
    const addService = async () => {
        if(serviceCode === '' || serviceName === '' || serviceDes === ''){
            alert("Vui lòng nhập đủ các trường!!!");
        }else{
            await addDoc(colRef, {
                service_code: serviceCode,
                service_name: serviceName,
                service_des: serviceDes,
                service_status: serviceStatus,
                service_increase: serviceIncrease,
                service_prefix: prefix,
                service_surfix: surfix
            })
            alert('Thêm dịch vụ thành công');
            navigate("/manage-service");
        }
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
                            <input type="number" onChange={handleFromChange} placeholder='0001'/>
                        </div>
                        <p className={styles.titleBox1}>đến</p>
                        <div className={styles.rangeTitle}>
                            <input type="number" onChange={handleToChange} placeholder='0001' max='9999'/>
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
                        <input onChange={(e) => setPrefix(Number(e.target.value))} type="number" placeholder='0001' max='9999' />
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
                        <input onChange={(e) => setSurfix(Number(e.target.value))} type="number" placeholder='0001' min='0' max='9999'/>
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
