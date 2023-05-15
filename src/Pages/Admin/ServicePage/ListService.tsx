import React, { useState } from 'react'
import styles from'./ListService.module.css';
import { faChevronRight, faSearch, faPlus, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomSelect from '../ActiceStatus/ActiveCondition';
import CustomSelectConnect from '../ConnectStatus/ConnecCondition';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
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
            <h2 className={styles.titleTime}>Chọn thời gian</h2>
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.iconCaret}/>
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
        <table>
        <thead>
          <tr>
            <th>Mã dịch vụ</th>
            <th>Tên dịch vụ</th>
            <th>Mô tả</th>
            <th style={{width: '120px'}}>Trạng thái hoạt động</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ 1</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.link}><Link to="/detail-service">Chi tiết</Link></td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Hoạt động</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Hoạt động</td>
            <td className={styles.status}>
              <span className={styles.actions}></span>
              <p className={styles.title}>Ngưng hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
             <td>Hoạt động</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
             <td>Hoạt động</td>
             <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
             <td>Hoạt động</td>
             <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
             <td>Hoạt động</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
             <td>Hoạt động</td>
             <td className={styles.status}>
              <span className={styles.actions}></span>
              <p className={styles.title}>Ngưng hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
             <td>Hoạt động</td>
             <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          </tbody>
        </table>
        {/* End Table */}
        <div className={styles.addItem}>
            <div className={styles.iconPlus}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            <Link to="/add-service"><p className={styles.titleAddItem}>Thêm dịch vụ</p></Link>
        </div>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
