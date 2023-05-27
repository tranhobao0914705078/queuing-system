import React, { useState } from 'react'
import styles from'./Report.module.css';
import { faChevronRight, faPlus, faCaretRight, faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import { GetReport } from './GetReport';
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';


export const Report = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }
  return (
    <div className={styles.container}>
       <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Báo cáo</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Lập báo cáo</h2>
       </div>
      {/* select menus */}
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon}/>
            <CustomCalendar />
            <p className={styles.times}>Chọn thời gian</p>
          </div>
        </div>
        <div>
        {/* table */}
        <GetReport />
        <div className={styles.addItem}>
            <div className={styles.iconPlus}>
                <FontAwesomeIcon icon={faFileArrowUp}/>
            </div>
            <Link to="/"><p className={styles.titleAddItem}>Tải về</p></Link>
        </div>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
