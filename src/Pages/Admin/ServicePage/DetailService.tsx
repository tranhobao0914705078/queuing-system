import React, {Fragment, useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './DetailService.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPen, faRotateLeft, faCaretRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';
import CustomStatus from '../Status/Status';
import Pagination from '../Pagination/Pagination';
import { DocumentData, Query, collection, doc, onSnapshot, where, query } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { db } from 'firebase-config/firebase';


export const DetailService = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = 10;
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }
    const {id} = useParams();
    const [serviceCode, setServiceCode] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [serviceDes, setServiceDes] = useState("");
    const [selectStatus, setSelectStatus] = useState(0);
    const [serviceIncreaseFrom, setServiceIncreaseFrom] = useState("")
    const [serviceIncreaseTo, setServiceIncreaseTo] = useState("")
    const [preFix, setPrefix] = useState(0)
    const [serviceFinish, setServiceFinish] = useState<any>([]);
    const handleChange = (newValue: string | null) => {
      if(newValue){
          const parseNewValue = parseInt(newValue, 10);
          console.log(parseNewValue);
          setSelectStatus(parseNewValue);
      }
    }
    useEffect(() => {
      const colRef = collection(db, "serviceFinish");
      let newRef: Query<DocumentData> = colRef;
      if(selectStatus !== 0){
          newRef = query(colRef, 
              where("status", '==', selectStatus)
          );
      }
      onSnapshot(newRef, (snapshot) => {
        const results: any[] = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setServiceFinish(results);
      })
    }, [selectStatus])
    if (!id) return null;
    const docRef = doc(db, "Service", id);
    const getId = async () => {
        const service = await getDoc(docRef);
        if (service.exists()) {
            setServiceCode(service.data()?.service_code);
            setServiceName(service.data()?.service_name);
            setServiceDes(service.data()?.service_des);
            setServiceIncreaseFrom(service.data()?.service_increase.from);
            setServiceIncreaseTo(service.data()?.service_increase.to);
            setPrefix(service.data()?.service_prefix);
        } else {
            console.log('Document does not exist!');
    }
    };
    getId();

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
         <div className={styles.boxLeft}>
            <h2 className={styles.titleBoxLeft}>Thông tin dịch vụ</h2>
            <div className={styles.detailService}>
               <p className={styles.titleDetail}>Mã dịch vụ</p>
               <p className={styles.titleNumber}>{serviceCode}</p>
            </div>
            <div className={styles.detailService}>
               <p className={styles.titleDetail}>Tên dịch vụ</p>
               <p className={styles.titleNumber}>{serviceName}</p>
            </div>
            <div className={styles.detailService}>
               <p className={styles.titleDetail}>Mô tả</p>
               <p className={`${styles.titleNumber} ${styles.custom}`}>{serviceDes}</p>
            </div>
            <h2 className={styles.title2}>Quy tắc cấp số</h2>
            <div className={`form-group ${styles.useService}`}>
            <div className={styles.ruleNumber}>
               <div className={`form-check ${styles.boxChecked}`}>
               <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
               Tăng tự động từ:
               </label>
            </div>
            <div className={styles.boxChecked1}>
                        <div className={styles.rangeTitle}>
                            <input type="number"  placeholder={serviceIncreaseFrom || '0001'}/>
                        </div>
                        <p className={styles.titleBox1}>đến</p>
                        <div className={styles.rangeTitle}>
                            <input type="number" placeholder={serviceIncreaseTo || '0009'} max='9999'/>
                        </div>
                    </div>
         </div>
         <div className={styles.ruleNumber}>
            <div className={`form-check ${styles.boxChecked}`}>
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
         <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
         Reset mỗi ngày
         </label>
      </div>
   </div>
   <small  id="usedService" className={`form-text text-muted ${styles.requireTitle}`}>Ví dụ: 201-2001.</small>
   </div>
   </div>
   <div className={styles.boxRight}>
    <CustomStatus onChange={handleChange}/>
    <div className={styles.times}>
        <h2>Chọn thời gian</h2>
        <CustomCalendar />
        <FontAwesomeIcon icon={faCaretRight} className={styles.iconCaret}/>
        <CustomCalendar />
    </div>
    <div className={styles.box}>
        <h2 className={styles.title}>Từ khóa</h2>
        <input type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
        <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
    </div>
    {/* Table */}
    <table className={styles.tableDetailService}>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Trạng thái</th>
          </tr>
          </thead>
          <tbody>
            {serviceFinish.map((ser: any) => 
              <tr key={ser.id}>
                <td>{ser.index}</td>
                <td className={styles.status}>
                  <span 
                    className={ser.status === 1 ? styles.finish : ser.status === 2 ? styles.processing : styles.absent}
                  >
                  </span>
                  <p className={styles.title}>{ser.status === 1 ? "Đã hoàn thành" : ser.status === 2 ? "Đang thực hiện" : "Vắng mặt"}</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
    {/* End table */}
    <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
    </div>
   </div>
   </div>
   <div className={styles.UpdateItem}>
      <div className={styles.iconPlus}>
         <FontAwesomeIcon icon={faPen}/>
      </div>
      <Link to="/add-item">
      <p className={styles.titleUpdateItem}>Cập nhật danh sách</p>
      </Link>
   </div>
   <hr className={styles.line}/>
   <div className={styles.back}>
      <div className={styles.iconPlus}>
         <FontAwesomeIcon icon={faRotateLeft}/>
      </div>
      <Link to="/manage-service">
      <p className={styles.titleBack}>Quay lại</p>
      </Link>
   </div>
   </div>
</Fragment>
)
}