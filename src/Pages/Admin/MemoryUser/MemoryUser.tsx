import React, { useState } from 'react'
import styles from'./MemoryUser.module.css';
import { faChevronRight, faPlus, faCaretRight, faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';
import { GetUserLogs } from './GetUserLogs';


export const MemoryUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }
  return (
    <div className={styles.container}>
       <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Cài đặt hệ thống</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Nhật ký người dùng</h2>
       </div>
      {/* select menus */}
        
        <div>
       <GetUserLogs />
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
