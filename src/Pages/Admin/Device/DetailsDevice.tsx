import React, {Fragment, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './DetailsDevice.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus, faPen } from '@fortawesome/free-solid-svg-icons'
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from 'firebase-config/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

export const DetailsDevice = () => {
    const [deviceCode, setDeviceCode] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [deviceIp, setDeviceIp] = useState('');
    const [deviceUserName, setDevicePassword] = useState('');
    const [deviceUsed, setDeviceUsed] = useState('');
    const [deviceType, setDeviceType] = useState(0);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
        return () => {
          unsubscribe();
        };
    }, []);
    const {id} = useParams();
    if(!id) return null;
    const docRef = doc(db, "Devices", id);
    const getId = async () => {
        const device = await getDoc(docRef);
        if(device.exists()){
            setDeviceCode(device.data()?.device_code);
            setDeviceName(device.data()?.device_name);
            setDeviceIp(device.data()?.device_ipaddress);
            setDeviceType(device.data()?.device_type);
            setDeviceUsed(device.data()?.device_usedservice);  
        }else{
            console.log('Error!');
        }
    }
    getId()

  return (
    <Fragment>
        <div className={styles.container}>
            <div className={styles.breadCrumb}>
                <h2 className={styles.breadCrumbCate}>Thiết bị</h2>
                <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
                <h2 className={styles.breadCrumbCate}>Danh sách thiết bị</h2>
                <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
                <h2 className={styles.breadCrumbDetail}>Chi tiết thiết bị</h2>
            </div>
            <div className={styles.listDevice}>
                <h2 className={styles.listDeviceTitle}>Quản lý thiết bị</h2>
            </div>

            <div className={styles.content}>
                <h2>Thông tin thiết bị</h2>
                <div className={styles.Flex_input}>
                    <div className={styles.inputLeft}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Mã thiết bị: </p>
                            <p className={styles.details}>{deviceCode}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Tên thiết bị: </p>
                            <p className={styles.details}>{deviceType === 1 ? 'Kiosk' : 'Display counter'}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Địa chỉ IP: </p>
                            <p className={styles.details}>{deviceIp}</p>
                        </div>
                    </div>
                    <div className={styles.inputRight}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Loại thiết bị: </p>
                            <p className={styles.details}>
                                {deviceType === 1 ? "Kiosk" : "Hệ thống"}
                            </p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Tên đăng nhập: </p>
                            {user && <p className={styles.details}>{user.email}</p>}
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Mật khẩu: </p>
                            <p className={styles.details}>113520</p>
                        </div>
                    </div>
                </div>
                <div className={`form-group ${styles.useService}`}>
                    <p className={styles.idDevice}>Dịch vụ sử dụng: </p>
                    <p className={styles.details}>{deviceUsed}</p>
                </div>
            </div>
            <div className={styles.addItem}>
                <div className={styles.iconPlus}>
                    <FontAwesomeIcon icon={faPen}/>
                </div>
                <Link to={`/update-device/${id}`}><p className={styles.titleAddItem}>Cập nhật thiết bị</p></Link>
            </div>
        </div>
    </Fragment>
  )
}
