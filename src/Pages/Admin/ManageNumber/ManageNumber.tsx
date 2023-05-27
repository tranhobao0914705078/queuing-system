import React, { useState } from 'react'
import styles from'./ManageNumber.module.css';
import { faChevronRight, faSearch, faPlus, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import ServiceName from '../ServiceName/ServiceName';
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';
import ActionsStatus from '../ActionsStatus/ActionsStatus';
import Supply from '../Supply/Supply';
import { GetData } from './GetData';


export const ManageNumber = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }
  return (
    <div className={styles.container}>
       <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Cấp số</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Danh sách cấp số</h2>
       </div>
      <div className={styles.listDevice}>
        <h2 className={styles.listDeviceTitle}>Quản lý cấp số</h2>
      </div>
      {/* select menus */}
        <div>
          <GetData />
        <div className={styles.addItem}>
            <div className={styles.iconPlus}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            <Link to="/new-number"><p className={styles.titleAddItem}>Cấp số mới</p></Link>
        </div>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
