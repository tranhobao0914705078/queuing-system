import React, { Fragment } from 'react'
import { useState } from 'react'
import styles from './AddService.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const UpdateService = () => {

    const {id} = useParams();
    const [serviceCode, setServiceCode] = useState("");
    const [serviceCodeUpdate, setServiceCodeUpdate] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [serviceNameUpdate, setServiceNameUpdate] = useState("");
    const [serviceDes, setServiceDes] = useState("");
    const [serviceDesUpdate, setServiceDesUpdate] = useState("");
    const [serviceIncreaseFrom, setServiceIncreaseFrom] = useState("")
    const [serviceIncreaseTo, setServiceIncreaseTo] = useState("")
    const [serviceIncreaseUpdate, setServiceIncreaseUpdate] = useState({from: 0, to: 0})
    const [preFix, setPrefix] = useState(0)
    const [surFix, setSurfix] = useState(0)
    const navigate = useNavigate();
    if(!id) return null;
    const docRef = doc(db, "Service", id);
    const getId = async () => {
        const service = await getDoc(docRef);
        if(service.exists()){
            setServiceCode(service.data()?.service_code);
            setServiceName(service.data()?.service_name);
            setServiceDes(service.data()?.service_des);
            setServiceIncreaseFrom(service.data()?.service_increase.from);
            setServiceIncreaseTo(service.data()?.service_increase.to);
            setPrefix(service.data()?.service_prefix);
            setSurfix(service.data()?.service_surfix);
        }
    }
    getId()
    const handleFromChange = (e:any) => {
        setServiceIncreaseUpdate((prevValue) => ({
          ...prevValue,
          from: e.target.value,
        }));
    };
    const handleToChange = (e:any) => {
        setServiceIncreaseUpdate((prevValue) => ({
          ...prevValue,
          to: e.target.value,
        }));
    };
    const update = async () => {
        const updatedServiceCode = serviceCodeUpdate || serviceCode;
        const updatedServiceName = serviceNameUpdate || serviceName;
        const updatedServiceDes = serviceDesUpdate || serviceDes;
        let updatedServiceIncrease;
        if (serviceIncreaseUpdate) {
          updatedServiceIncrease = serviceIncreaseUpdate;
        } else if (serviceIncreaseFrom || serviceIncreaseTo) {
          updatedServiceIncrease = serviceIncreaseFrom || serviceIncreaseTo;
        }
        await updateDoc(docRef, {
            service_code: updatedServiceCode,
            service_name: updatedServiceName,
            service_des: updatedServiceDes,
            service_increase: updatedServiceIncrease,
          });
          alert("Cập nhật thành công!!!");
          navigate('/manage-service');
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
                        <input onChange={(e) => setServiceCode(e.target.value)} type="text" className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder={serviceCode} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="nameDevice">Tên dịch vụ: <span>*</span></label>
                        <input onChange={(e) => setServiceName(e.target.value)} type="text" className="form-control" id="nameDevice" aria-describedby="emailHelp" placeholder={serviceName} />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Mô tả: <span>*</span></label>
                        <textarea onChange={(e) => setServiceDes(e.target.value)} className={`form-control ${styles.service_des}`} id="userName" placeholder={serviceDes} />
                    </div>
                </div>
            </div>
            <div className={`form-group ${styles.useService}`}>
                <label className={styles.labelName} htmlFor="usedService">Quy tắc cấp số: </label>
                <div className={styles.ruleNumber}>
                    <div className={`form-check ${styles.boxChecked}`}>
                        <input className={`form-check-input ${styles.customChecked}`} checked={serviceIncreaseFrom !== "" && serviceIncreaseTo !== ""} type="checkbox" id="flexCheckDefault" />
                        <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
                            Tăng tự động từ:
                        </label>
                    </div>
                    <div className={styles.boxChecked1}>
                        <div className={styles.rangeTitle}>
                            <input type="number" onChange={handleFromChange} placeholder={serviceIncreaseFrom || '0001'}/>
                        </div>
                        <p className={styles.titleBox1}>đến</p>
                        <div className={styles.rangeTitle}>
                            <input type="number" onChange={handleToChange} placeholder={serviceIncreaseTo || '0009'} max='9999'/>
                        </div>
                    </div>
                </div>
                <div className={styles.ruleNumber}>
                    <div className={`form-check ${styles.boxChecked}`}>
                        <input className={`form-check-input ${styles.customChecked}`} checked={preFix !== 0} type="checkbox" id="flexCheckDefault" />
                        <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
                            Prefix
                        </label>
                    </div>
                    <div className={styles.rangeTitle}>
                    <input
                        type="number"
                        placeholder={preFix === 0 ? '0001' : preFix.toString()}
                        max='9999'
                    />
                    </div>
                </div>
                <div className={styles.ruleNumber}>
                    <div className={`form-check ${styles.boxChecked}`}>
                        <input className={`form-check-input ${styles.customChecked}`} checked={surFix !== 0} type="checkbox" id="flexCheckDefault" />
                        <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
                            Surfix
                        </label>
                    </div>
                    <div className={styles.rangeTitle}>
                    <input
                        type="number"
                        placeholder={surFix === 0 ? '0001' : surFix.toString()}
                        min='0'
                        max='9999'
                    />
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
            <button className={styles.addItem} onClick={() => {update()}}>Cập nhật dịch vụ</button>
        </div>
    </div>
    </Fragment>
  )
}
