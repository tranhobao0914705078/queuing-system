import React, { useState } from 'react'
import styles from'./ManageRole.module.css';
import { faChevronRight, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import Role from '../Role/Role';

export const ManageRole = () => {
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
          <h2 className={styles.breadCrumbDetail}>Quản lý vai trò</h2>
       </div>
       <div className={styles.listDevice}>
        <h2 className={styles.listDeviceTitle}>Danh sách vai trò</h2>
      </div>
      {/* select menus */}
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <div className={styles.box}>
                <h2 className={styles.title}>Từ khóa</h2>
                <input type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
                <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
            </div>
          </div>
        </div>
        <div>
        <table>
        <thead>
          <tr>
            <th>Tên vai trò</th>
            <th>Số người dùng</th>
            <th style={{width: '150px'}}>Mô tả</th>
            <th style={{width: '50px'}}></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ thống kê số liệu và tổng hợp số liệu</td>
            <td className={styles.linkUpdate}><Link to="/update-account">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>Bác sĩ</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ thống kê số liệu và tổng hợp số liệu</td>
            <td className={styles.linkUpdate}><Link to="/update-account">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>Lễ tân</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ thống kê số liệu và tổng hợp số liệu</td>
            <td className={styles.linkUpdate}><Link to="/update-account">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>Quản lý</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ thống kê số liệu và tổng hợp số liệu</td>
            <td className={styles.linkUpdate}><Link to="/update-account">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ thống kê số liệu và tổng hợp số liệu</td>
            <td className={styles.linkUpdate}><Link to="/update-account">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>Supperadmin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ thống kê số liệu và tổng hợp số liệu</td>
            <td className={styles.linkUpdate}><Link to="/update-account">Cập nhật</Link></td>
          </tr>
          </tbody>
        </table>
        <div className={styles.addItem}>
            <div className={styles.iconPlus}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            <Link to="/add-role"><p className={styles.titleAddItem}>Thêm vai trò</p></Link>
        </div>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
