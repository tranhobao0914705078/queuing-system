import React, {Fragment, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './Details.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const Details = () => {

    const {id} =useParams();
    const [fullName, setFullName] = useState("");
    const [service, setService] = useState("");
    const [index, setIndex] = useState("");
    const [timeStart, setTimeStart] = useState("");
    const [endTime, setEndTime] = useState("");
    const [supply, setSupply] = useState("");
    const [status, setStatus] = useState(0);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    if(!id) return null;
    const docRef = doc(db, "Customer", id);
    const getId = async () => {
        const customer = await getDoc(docRef);
        if(customer.exists()){
            setFullName(customer.data()?.customer_name);
            setService(customer.data()?.customer_service);
            setIndex(customer.data()?.customer_code);
            setTimeStart(customer.data()?.customer_time);
            setEndTime(customer.data()?.customer_expiry);  
            setSupply(customer.data()?.customer_suply);  
            setStatus(customer.data()?.customer_status);  
            setPhone(customer.data()?.customer_phone);  
            setEmail(customer.data()?.customer_email);  
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
                <h2 className={styles.breadCrumbCate}>Danh sách cấp số</h2>
                <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
                <h2 className={styles.breadCrumbDetail}>Chi tiết</h2>
            </div>
            <div className={styles.listDevice}>
                <h2 className={styles.listDeviceTitle}>Quản lý cấp số</h2>
            </div>

            <div className={styles.content}>
                <h2>Thông tin cấp số</h2>
                <div className={styles.Flex_input}>
                    <div className={styles.inputLeft}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Họ và tên: </p>
                            <p className={styles.details}>{fullName}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Tên dịch vụ: </p>
                            <p className={styles.details}>{service}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Số thứ tự: </p>
                            <p className={styles.details}>{index}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Thời gian cấp: </p>
                            <p className={styles.details}>{timeStart}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Hạn sử dụng: </p>
                            <p className={styles.details}>{endTime}</p>
                        </div>
                    </div>
                    <div className={styles.inputRight}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Nguồn cấp: </p>
                            <p className={styles.details}>{supply}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Trạng thái: </p>
                            <div className={styles.status}>
                                <span
                                    className={status === 1 ? styles.actionsWaiting : status === 2 ? styles.actionsUsed : styles.actionsCancel}
                                ></span>
                                <p className={`${styles.titleSuccess} ${styles.details}`}>{status === 1 ? "Đang chờ" : status === 2 ? "Đã sử dụng" : "Bỏ qua"}</p>
                            </div>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Số điện thoại: </p>
                            <p className={styles.details}>{phone}</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Địa chỉ email: </p>
                            <p className={styles.details}>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.addItem}>
                <div className={styles.iconPlus}>
                    <FontAwesomeIcon icon={faRotateLeft}/>
                </div>
                <Link to="/manage-number"><p className={styles.titleAddItem}>Quay lại</p></Link>
            </div>
        </div>
    </Fragment>
  )
}
