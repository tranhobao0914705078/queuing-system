import React, { useState } from 'react'
import styles from'./Report.module.css';
import { faChevronRight, faPlus, faCaretRight, faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
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
        <table>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Tên dịch vụ</th>
            <th>thời gian cấp</th>
            <th style={{width: '120px'}}>Tình trạng</th>
            <th>Nguồn cấp</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010002</td>
            <td>Răng hàm mặt</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsUsed}></span>
              <p className={styles.titleSuccess}>Đã sử dụng</p>
            </td>
            <td>Hệ thống</td>
          </tr>
          <tr>
            <td>2010003</td>
            <td>Khám sản- phụ khoa</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsCancel}></span>
              <p className={styles.titleSuccess}>Bỏ qua</p>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010004</td>
            <td>Răng hàm mặt</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Hệ thống</td>
          </tr>
          <tr>
            <td>2010005</td>
            <td>Tai mũi họng</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010006</td>
            <td>Khám tổng quát</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsCancel}></span>
              <p className={styles.titleSuccess}>Bỏ qua</p>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010007</td>
            <td>Khám hô hấp</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010008</td>
            <td>Khám hô hấp</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsUsed}></span>
              <p className={styles.titleSuccess}>Đã sử dụng</p>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010009</td>
            <td>Tai mũi họng</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsCancel}></span>
              <p className={styles.titleSuccess}>Bỏ qua</p>
            </td>
            <td>Hệ thống</td>
          </tr>
          <tr>
            <td>2010010</td>
            <td>Khám sản - phụ khoa</td>
            <td>07:20- 07/10/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Hệ thống</td>
          </tr>
          </tbody>
        </table>
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
