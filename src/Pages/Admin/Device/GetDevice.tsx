import React, { useState, useEffect } from 'react'
import styles from'./Device.module.css';
import { useNavigate } from "react-router-dom";
import { collection, getDocs, onSnapshot, query, where, CollectionReference, Query, DocumentData } from "firebase/firestore";
import { db } from 'firebase-config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from '../ActiceStatus/ActiveCondition';
import CustomSelectConnect from '../ConnectStatus/ConnecCondition';
import { Link } from 'react-router-dom';

function GetDevice() {
    const [deviceList, setDeviceList] = useState<any>([]);
    const [filter, setFilter] = useState("");
    const [selectActive, setSelectActive] = useState(0)
    const [selectConnect, setSelectConnect] = useState(0)

    useEffect(() => {
        const colRef: CollectionReference = collection(db, 'Devices');
        let newRef: Query<DocumentData> = colRef;
        if(filter && selectActive !== 0 && selectConnect !== 0) {
            newRef = query(colRef, 
                where('device_active', '==', selectActive), 
                where('device_code', '==', filter), 
                where('device_connect', '==', selectConnect),
            ); 
        }else if(filter){
            newRef = query(colRef, where('device_code', '==', filter));
        }else if(selectActive !== 0){
            newRef = query(colRef, where('device_active', '==', selectActive));
        }else if(selectConnect !== 0){
            newRef = query(colRef, where('device_connect', '==', selectConnect));
        }
        onSnapshot(newRef, (snapshot) => {
        const results: any[] = [];
        snapshot.forEach((doc) => {
            results.push({
            id: doc.id,
            ...doc.data(),
            });
        });
        setDeviceList(results);
        });
    }, [filter, selectActive, selectConnect]);

    const handleChange = (newValue: string | null) => {
        if(newValue){
            const parseNewValue = parseInt(newValue, 10);
            setSelectActive(parseNewValue);
            console.log(selectActive)
        }
    }

    const handleChangeConnect = (newValue: string | null) => {
        if(newValue){
            const parseNewValue = parseInt(newValue, 10);
            console.log(parseNewValue);
            setSelectConnect(parseNewValue);
        }
    }

    return (
        <div>
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomSelect onChange={handleChange}/>
            <CustomSelectConnect onChange={handleChangeConnect}/>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Từ khóa</h2>
            <input type="text" className={styles.inputSearch} onChange={(e) => setFilter(e.target.value)} autoComplete='off' placeholder='Nhập từ khóa'/>
            <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
          </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Mã thiết bị</th>
                    <th>Tên thiết bị</th>
                    <th>Địa chỉ IP</th>
                    <th style={{width: '120px'}}>Trạng thái hoạt động</th>
                    <th>Trạng thái kết nối</th>
                    <th style={{width: '100px'}}>Dịch vụ sử dụng</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {deviceList.length > 0 && 
                    deviceList.map((device: any) => (
                        <tr key={device.id}>
                            <td>{device.device_code}</td>
                            <td>{device.device_type === 1 ? "Kiosk" : "Display counter"}</td>
                            <td>{device.device_ipaddress}</td>
                            <td className={styles.status}>
                                <span
                                className={
                                    device.device_active === 1 ? styles.actionsSuccess : styles.actions
                                }
                                ></span>
                                <p
                                className={
                                    device.device_active === 1 ? styles.titleSuccess : styles.title
                                }
                                >
                                {device.device_active === 1 ? "Hoạt động" : "Ngưng hoạt động"}
                                </p>
                            </td>
                            <td>
                                <div className={styles.statusConnect}>
                                    <span
                                    className={
                                        device.device_connect === 1 ? styles.actionsSuccess : styles.actionsUnConnect
                                    }
                                    ></span>
                                    <p
                                    className={
                                        device.device_connect === 1 ? styles.titleSuccess : styles.titleConnect
                                    }
                                    >
                                    {device.device_connect === 1 ? "Kết nối" : "Mất kết nối"}
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className={styles.element}>{device.device_usedservice}</p>
                                <a href={device.link} className={styles.linkUpdate}>
                                    Xem thêm
                                </a>
                            </td>
                            <td className={styles.linkUpdate}>
                                <Link to={`/details-device/${device.id}`}>Chi tiết</Link>
                            </td>
                            <td className={styles.linkUpdate}>
                                <Link to={`/update-device/${device.id}`}>Cập nhật</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    );
}

export default GetDevice;
  