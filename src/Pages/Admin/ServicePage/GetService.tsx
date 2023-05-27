import React, { useState, useEffect } from 'react'
import styles from'./ListService.module.css';
import { useNavigate } from "react-router-dom";
import { DocumentData, Query, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from '../ActiceStatus/ActiveCondition';
import CustomSelectConnect from '../ConnectStatus/ConnecCondition';
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';
import { Link } from 'react-router-dom';

export const GetService = () => {
    const [serviceList, setServiceList] = useState<any>([]);
    const [filterSerivce, setFilterService] = useState("");
    const [selectActive, setSelectActive] = useState(0);

    useEffect(() => {
        const colRef = collection(db, 'Service');
        let newRef: Query<DocumentData> = colRef;
        if(filterSerivce && selectActive !== 0){
          newRef = query (colRef, 
              where('service_status', '==', selectActive),
              where('service_code', '==', filterSerivce)
            );
        }else if(filterSerivce){
          newRef = query(colRef, where('service_code', '==', filterSerivce))
        }else if(selectActive !== 0){
          newRef = query(colRef, where('service_status', '==', selectActive))
        }
        onSnapshot(newRef, (snapshot) => {
          const results: any[] = [];
          snapshot.forEach((doc) => {
            results.push({
            id: doc.id,
            ...doc.data(),
            });
          });
          setServiceList(results);
        })
    }, [filterSerivce, selectActive])

    const handleChange = (newValue: string | null) => {
      if(newValue){
          const parseNewValue = parseInt(newValue, 10);
          console.log(parseNewValue);
          setSelectActive(parseNewValue);
      }
    }
    
  return (
    <div>
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomSelect onChange={handleChange}/>
            <h2 className={styles.titleTime}>Chọn thời gian</h2>
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.iconCaret}/>
            <CustomCalendar />
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Trạng thái hoạt động</h2>
            <input type="text" onChange={(e) => setFilterService(e.target.value)} className={styles.inputSearch} placeholder='Nhập từ khóa'/>
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
                <td className={styles.link}><Link to={`/detail-service/${service.id}`}>Chi tiết</Link></td>
                <td className={styles.linkUpdate}><Link to={`/update-service/${service.id}`}>Cập Nhật</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
