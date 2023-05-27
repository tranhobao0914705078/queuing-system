import React, { useEffect, useState } from 'react'
import { CollectionReference, DocumentData, Query, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ManageNumber.module.css'
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';
import Supply from '../Supply/Supply';
import ActionsStatus from '../ActionsStatus/ActionsStatus';
import ServiceName from '../ServiceName/ServiceName';
import { Link } from 'react-router-dom';


export const GetData = () => {

    const [dataList, setDataList] = useState<any>([]);
    const [filter, setFilter] = useState("");
    const [supply, setSupply] = useState(0);
    const [active, setActive] =useState(0);
    const [serviceName, setServiceName] =useState(0);

    useEffect(() => {
      const colRef: CollectionReference = collection(db, 'Customer');
      let newRef: Query<DocumentData> = colRef;
      if(filter && active !== 0 && supply !== 0 && serviceName !== 0) {
          newRef = query(colRef, 
              where('customer_status', '==', active), 
              where('customer_suply', '==', supply), 
              where('customer_code', '==', filter), 
              where('customer_service', '==', serviceName), 
          ); 
      }else if(filter){
          newRef = query(colRef, where('customer_code', '==', filter));
      }else if(active !== 0){
          newRef = query(colRef, where('customer_status', '==', active));
      }else if(supply !== 0){
        newRef = query(colRef, where('customer_suply', '==', supply));
      }else if(serviceName !== 0){
        newRef = query(colRef, where('customer_service', '==', serviceName));
      }
      onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
          results.push({
          id: doc.id,
          ...doc.data(),
          });
      });
      setDataList(results);
      });
  }, [filter, active, supply, serviceName]);
  console.log(active)
    const handleChangeSupply = (newValue: string | null) => {
      if(newValue){
        const parseNewValue = parseInt(newValue, 10);
        setSupply(parseNewValue);
        console.log(supply)
      }
    }

    const handleChangeService = (newValue: string | null) => {
      if(newValue){
        const parseNewValue = parseInt(newValue, 10);
        setServiceName(parseNewValue);
      }
    }

    const handleStatus = (newValue: string | null) => {
      if(newValue){
        const parseNewValue = parseInt(newValue, 10);
        setActive(parseNewValue);
      }
    }

  return (
    <div>
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <ServiceName onChange={handleChangeService}/>
            <ActionsStatus onChange={handleStatus}/>
            <Supply onChange={handleChangeSupply}/>
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon}/>
            <CustomCalendar />
            <p className={styles.times}>Chọn thời gian</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Từ khóa</h2>
            <input type="text" onChange={(e) => setFilter(e.target.value)} className={styles.inputSearch} placeholder='Nhập từ khóa'/>
            <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
          </div>
        </div>
        <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên khách hàng</th>
            <th>Tên dịch vụ</th>
            <th style={{width: '120px'}}>Thời gian cấp</th>
            <th>Hạn sử dụng</th>
            <th style={{width: '100px'}}>Trạng thái</th>
            <th>Nguồn Cấp</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {dataList.length > 0 && 
                dataList.map((data: any) => (
                    <tr key={data.id}>
                        <td>{data.customer_code}</td>
                        <td>{data.customer_name}</td>
                        <td>{data.customer_service === 1 ? 'Khám sản - Phụ khoa' : data.customer_service === 2 ? 'Khám răng hàm mặt' : 'Khám tai mũi họng'}</td>
                        <td>{data.customer_time}</td>
                        <td>{data.customer_expiry}</td>
                        <td className={styles.status}>
                            <span
                                className={data.customer_status === 1 ? styles.actionsWaiting : data.customer_status === 2 ? styles.actionsUsed : styles.actionsCancel}
                            ></span>
                            <p className={styles.titleSuccess}>
                                {data.customer_status === 1 ? 'Đang chờ' : data.customer_status === 2 ? 'Đã sử dụng' : 'Bỏ qua'}
                            </p>
                        </td>
                        <td>{data.customer_suply === 1 ? 'Kiosk' : 'Hệ thống'}</td>
                        <td className={styles.linkUpdate}><Link to={`/details-number/${data.id}`}>Chi tiết</Link></td>
                    </tr>
                ))
            }
          </tbody>
        </table>
    </div>
  )
}
