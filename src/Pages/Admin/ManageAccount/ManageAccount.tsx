import React, { useState } from 'react'
import styles from'./Manage.module.css';
import { faChevronRight, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import Role from '../Role/Role';
import { GetMangeAccount } from './GetMangeAccount';

export const ManageAccount = () => {
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
          <h2 className={styles.breadCrumbDetail}>Quản lý tài khoản</h2>
       </div>
       <div className={styles.listDevice}>
        <h2 className={styles.listDeviceTitle}>Danh sách tài khoản</h2>
      </div>
      {/* select menus */}
        
        <div>
       <GetMangeAccount />
        <div className={styles.addItem}>
            <div className={styles.iconPlus}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            <Link to="/add-account"><p className={styles.titleAddItem}>Thêm tài khoản</p></Link>
        </div>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
