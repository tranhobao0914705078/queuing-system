import React, { useState, useEffect } from 'react'
import styles from'./ListService.module.css';
import { useNavigate } from "react-router-dom";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from '../ActiceStatus/ActiveCondition';
import CustomSelectConnect from '../ConnectStatus/ConnecCondition';
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';

export const GetService = () => {
    const [serviceList, setServiceList] = useState<any>([]);
    const [filterSerivce, setFilterService] = useState();

    useEffect(() => {
        const colRef = collection(db, 'Service');
        const newRef = filterSerivce ? query(colRef, where("service_code", "==", filterSerivce)) : colRef;
        onSnapshot(newRef, (snapshot) => {
            const result: any[] = [];
            snapshot.forEach((doc) => {
                result.push({
                id: doc.id,
                ...doc.data(),
                });
            });
            setServiceList(result);
        })
    }, [filterSerivce])
  return (
    <div>
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomSelect />
            <h2 className={styles.titleTime}>Chọn thời gian</h2>
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.iconCaret}/>
            <CustomCalendar />
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Trạng thái hoạt động</h2>
            <input type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
            <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
          </div>
        </div>
        <table>
        <thead>
          <tr>
            <th>Mã dịch vụ</th>
            <th>Tên dịch vụ</th>
            <th>Mô tả</th>
            <th>Trạng thái hoạt động</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {serviceList.length > 0 && serviceList.map((service: any) => (
                <tr>
                <td>{service.service_code}</td>
                <td>{service.service_name}</td>
                <td>{service.service_des}</td>
                <td className={styles.status}>
                    <span
                        className={
                            service.service_status === 1 ? styles.actionsSuccess : styles.actions
                        }
                    ></span>
                    <p
                        className={
                            service.service_status === 1 ? styles.titleSuccess : styles.title
                        }
                    >
                        {service.service_status === 1 ? "Hoạt động" : "Ngưng hoạt động"}
                    </p>
                </td>
                <td className={styles.link}><a href="">Chi tiết</a></td>
                <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
