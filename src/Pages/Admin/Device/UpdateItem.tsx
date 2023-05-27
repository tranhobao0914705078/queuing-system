import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'
import styles from './ManageItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CustomSelectType from './TypeDevice'
import { DocumentData, DocumentSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from 'firebase-config/firebase';
import { useNavigate, useParams } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailAndPassword, User, signOut } from 'firebase/auth';
import { auth } from 'firebase-config/firebase';


export const UpdateItem = () => {
    const [deviceCode, setDeviceCode] = useState('');
    const [deviceCodeUpdate, setDeviceCodeUpdate] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [deviceNameUpdate, setDeviceNameUpdate] = useState('');
    const [deviceIp, setDeviceIp] = useState('');
    const [deviceIpUpdate, setDeviceIpUpdate] = useState('');
    const [deviceUserName, setDevicePassword] = useState('');
    const [deviceUsed, setDeviceUsed] = useState('');
    const [deviceType, setDeviceType] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
        return () => {
          unsubscribe();
        };
    }, []);

    if (!id) return null;
    const docRef = doc(db, "Devices", id);
    const getId = async () => {
        const deviceSnapshot = await getDoc(docRef);
        if (deviceSnapshot.exists()) {
            setDeviceCode(deviceSnapshot.data()?.device_code);
            setDeviceName(deviceSnapshot.data()?.device_name);
            setDeviceIp(deviceSnapshot.data()?.device_ipaddress);
            setDeviceUsed(deviceSnapshot.data()?.device_usedservice);
        } else {
            console.log('Document does not exist!');
    }
    };
    getId();
    
    const update = async () => {
        // Kiểm tra nếu không nhập dữ liệu, sử dụng giá trị ban đầu
        const updatedDeviceCode = deviceCodeUpdate || deviceCode;
        const updatedDeviceName = deviceNameUpdate || deviceName;
        const updatedDeviceIp = deviceIpUpdate || deviceIp;
        
      
        await updateDoc(docRef, {
          device_code: updatedDeviceCode,
          device_name: updatedDeviceName,
          device_ipaddress: updatedDeviceIp,
          device_type: deviceType,
          device_usedservice: deviceUsed
        });
        
        alert("success");
        navigate('/device');
      }
      

    const handleChange = (newValue: string | null) => {
        if(newValue){
            const parseNewValue = parseInt(newValue, 10);
            console.log(parseNewValue);
            setDeviceType(parseNewValue);
        }
    }

    const handleback = () => {
        navigate('/device');
    }

    const handleDelete = () => {

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
            <div className={styles.Flex_input}>
                <div className={styles.inputLeft}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="idDevice">Mã thiết bị: <span>*</span></label>
                        <input type="text" onChange={(e) => setDeviceCodeUpdate(e.target.value)} className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder={deviceCode} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="nameDevice">Tên thiết bị: <span>*</span></label>
                        <input type="text" onChange={(e) => setDeviceNameUpdate(e.target.value)} className="form-control" id="nameDevice" aria-describedby="emailHelp" placeholder={deviceType === 1 ? "Kiosk" : "Display counter"} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="ipAddress">Địa chỉ IP: <span>*</span></label>
                        <input type="text" onChange={(e) => setDeviceIpUpdate(e.target.value)} className="form-control" id="ipAddress" aria-describedby="emailHelp" placeholder={deviceIp} />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="typeDevice">Loại thiết bị: <span>*</span></label>
                        <CustomSelectType onChange={handleChange}/>
                    </div>
                    {user && 
                        <div className="form-group">
                            <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Tên đăng nhập: <span>*</span></label>
                            <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder={user.email ?? ''}/>
                        </div>
                    }
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="userPassword">Mật khẩu: <span>*</span></label>
                        <input type="password" className="form-control" id="userPassword" aria-describedby="emailHelp" value="113520" />
                    </div>
                </div>
            </div>
            <div className={`form-group ${styles.useService}`}>
                    <p className={styles.idDevice}>Dịch vụ sử dụng: </p>
                    <div className={styles.service}>
                        <div className={styles.Tag}>
                            <p>{deviceUsed}</p>
                            <span onClick={handleDelete}>&times;</span>
                        </div>
                    </div>
                    <small  id="usedService" className={`form-text text-muted ${styles.requireTitle}`}><span>*</span> Là trường thông tin bắt buộc.</small>
            </div>
            <div className={styles.btnActions}>
                <button className={styles.cancel} onClick={handleback}>Hủy bỏ</button>
                <button className={styles.addItem} onClick={() => {update()}}>Cập Nhật</button>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

