import React, { useState } from 'react'
import styles from'./MemoryUser.module.css';
import { faChevronRight, faPlus, faCaretRight, faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';


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
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon}/>
            <CustomCalendar />
            <p className={styles.times}>Chọn thời gian</p>
          </div>
        </div>
        <div>
        <table>
        <thead>
          <tr>
            <th>Tên đăng nhập</th>
            <th>Thời gian tác động</th>
            <th>IP thực hiện</th>
            <th style={{width: '120px'}}>Thao tác thực hiện</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>01/12/2021 15:12:17</td>
            <td>192.168.3.1</td>
            <td>Cập nhật thông tin dịch vụ DV_01</td>
          </tr>
          </tbody>
        </table>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
