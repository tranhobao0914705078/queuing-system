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
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <ServiceName />
            <ActionsStatus />
            <Supply />
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon}/>
            <CustomCalendar />
            <p className={styles.times}>Chọn thời gian</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Từ khóa</h2>
            <input type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
            <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
          </div>
        </div>
        <div>
        <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên khách hàng</th>
            <th>Tên dịch vụ</th>
            <th style={{width: '120px'}}>Thời gian cấp</th>
            <th>Hạn sử dụng</th>
            <th style={{width: '100px'}}>Trạng thái</th>
            <th>Nguồn Cấp</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2010001</td>
            <td>Lê Huỳnh Ái Vân</td>
            <td>Khám tim mạch</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Kiosk</td>
            <td className={styles.linkUpdate}><Link to="/details-number">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Lê Huỳnh Ái Vân</td>
            <td>Khám tim mạch</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Kiosk</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010002</td>
            <td>Huỳnh Ái Vân</td>
            <td>Khám sản - Phụ khoa</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsUsed}></span>
              <p className={styles.titleSuccess}>Đã sử dụng</p>
            </td>
            <td>Kiosk</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010003</td>
            <td>Lê Ái Vân</td>
            <td>Khám răng hàm mặt</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Hệ thống</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010004</td>
            <td>Nguyễn Ái Vân</td>
            <td>Khám tai mũi họng</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Hệ thống</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010005</td>
            <td>Trần Thị Ái Vân</td>
            <td>Khám hô hấp</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsWaiting}></span>
              <p className={styles.titleSuccess}>Đang chờ</p>
            </td>
            <td>Kiosk</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010006</td>
            <td>Lê Huỳnh Nghĩa</td>
            <td>Khám tổng quát</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsUsed}></span>
              <p className={styles.titleSuccess}>Đã sử dụng</p>
            </td>
            <td>Hệ thống</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010007</td>
            <td>Lê Huỳnh Đức</td>
            <td>Khám tai mũi họng</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsUsed}></span>
              <p className={styles.titleSuccess}>Đã sử dụng</p>
            </td>
            <td>Kiosk</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010008</td>
            <td>Phạm Văn Mạnh</td>
            <td>Khám tổng quát</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsCancel}></span>
              <p className={styles.titleSuccess}>Bỏ qua</p>
            </td>
            <td>Hệ thống</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          <tr>
            <td>2010009</td>
            <td>Lê Thị Cẩm Tiên</td>
            <td>Khám tai mũi họng</td>
            <td>14:35- 07/11/2021</td>
            <td>14:35- 12/11/2021</td>
            <td className={styles.status}>
              <span className={styles.actionsUsed}></span>
              <p className={styles.titleSuccess}>Đã sử dụng</p>
            </td>
            <td>Hệ thống</td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Chi tiết</Link></td>
          </tr>
          </tbody>
        </table>
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
