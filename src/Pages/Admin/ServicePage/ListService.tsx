import React, { useState } from 'react'
import styles from'./ListService.module.css';
import { faChevronRight, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomSelect from '../ActiceStatus/ActiveCondition';
import CustomSelectConnect from '../ConnectStatus/ConnecCondition';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import { CalendarCustom } from '../YearCalendar/CalendarCustom';
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';

export const ListService = () => {
    
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }

  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  }

  return (
    <div className={styles.container}>
       <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Dịch vụ</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Danh sách dịch vụ</h2>
       </div>
      <div className={styles.listDevice}>
        <h2 className={styles.listDeviceTitle}>Quản lý dịch vụ</h2>
      </div>
      {/* select menus */}
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomSelect />
            <CustomCalendar />
            <CustomCalendar />
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Trạng thái hoạt động</h2>
            <input type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
            <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
          </div>
        </div>
        <div>
        {/* Table */}
        {/* End Table */}
        <div className={styles.addItem}>
            <div className={styles.iconPlus}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            <Link to="/add-item"><p className={styles.titleAddItem}>Thêm dịch vụ</p></Link>
        </div>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
