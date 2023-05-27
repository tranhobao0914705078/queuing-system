import React, { Fragment, useState } from 'react'
import styles from './AddItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CustomSelectType from './TypeDevice'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, onSnapshot, query, where, addDoc } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const AddItem = () => {
    const [deviceCode, setDeviceCode] = useState("");
    const [deviceName, setDeviceName] = useState("");
    const [deviceIPAddress, setDeviceIPAddress] = useState("");
    const [deviceUsedService, setDeviceUsedService] = useState("");
    const [deviceActive, setDeviceActive] = useState(0);
    const [deviceConnect, setDeviceConnect] = useState(0);
    const [selectType, setSelectType] = useState(0);
    const colRef = collection(db, "Devices");
    const navigate = useNavigate();

    const handleChange = (newValue: string | null) => {
        if (newValue) {
            const parseNewValue = parseInt(newValue, 10);
            // console.log(parseNewValue);
            setSelectType(parseNewValue);
        }
    }

    const createDevice = async () => {
        if(deviceCode === "" || deviceName === "" || deviceIPAddress === "" || deviceUsedService === ""){
            alert("Vui lòng nhập đủ thông tin các trường!!!");
        }else{
            await addDoc(colRef, 
                {
                    device_code: deviceCode, 
                    device_name: deviceName, 
                    device_ipaddress: deviceIPAddress, 
                    device_usedservice: deviceUsedService,
                    device_active: deviceActive,
                    device_type: selectType,
                    device_connect: deviceConnect
                }
            )
            navigate('/device');
        }
    }
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
                        <input type="text" onChange={(e) => setDeviceCode(e.target.value)} className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder="Mã thiết bị" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="nameDevice">Tên thiết bị: <span>*</span></label>
                        <input type="text" onChange={(e) => setDeviceName(e.target.value)} className="form-control" id="nameDevice" aria-describedby="emailHelp" placeholder="Tên thiết bị" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="ipAddress">Địa chỉ IP: <span>*</span></label>
                        <input type="text" onChange={(e) => setDeviceIPAddress(e.target.value)} className="form-control" id="ipAddress" aria-describedby="emailHelp" placeholder="Địa chỉ IP" />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="typeDevice">Loại thiết bị: <span>*</span></label>
                        <CustomSelectType onChange={handleChange}/>
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
                <input type="text" onChange={(e) => setDeviceUsedService(e.target.value)} className="form-control" id="usedService" aria-describedby="emailHelp" placeholder="Dịch vụ sử dụng" />
                <small  id="usedService" className={`form-text text-muted ${styles.requireTitle}`}><span>*</span> Là trường thông tin bắt buộc.</small>
            </div>
            <div className={styles.btnActions}>
                <button className={styles.cancel}>Hủy bỏ</button>
                <button className={styles.addItem} onClick={createDevice}>Thêm thiết bị</button>
            </div>
        </div>
    </div>
    </Fragment>
  )
}
