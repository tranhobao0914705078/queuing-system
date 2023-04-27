import React, { useState } from 'react'
import styles from'./Device.module.css';
import { faChevronRight, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomSelect from './ActiveCondition';
import CustomSelectConnect from './ConnecCondition';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

export const Device = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }
  return (
    <div className={styles.container}>
       <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Thiết bị</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Danh sách thiết bị</h2>
       </div>
      <div className={styles.listDevice}>
        <h2 className={styles.listDeviceTitle}>Danh sách thiết bị</h2>
      </div>
      {/* select menus */}
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomSelect />
            <CustomSelectConnect />
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Trạng thái hoạt động</h2>
            <input type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
            <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
          </div>
        </div>
        <div>
        <table>
        <thead>
          <tr>
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Địa chỉ IP</th>
            <th style={{width: '120px'}}>Trạng thái hoạt động</th>
            <th>Trạng thái kết nối</th>
            <th style={{width: '100px'}}>Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td className={styles.status}>
              <span className={styles.actions}></span>
              <p className={styles.title}>Ngưng hoạt động</p>
            </td>
            <td>
              <div className={styles.statusConnect}>
                <span className={styles.actionsConnect}></span>
                <p className={styles.titleConnect}>Mất kết nối</p>
              </div>
            </td>
            <td>
              <p className={styles.element}>Khám tim mạch, Khám mắt</p>
              <a href="" className={styles.linkUpdate}>Xem thêm</a>
            </td>
            <td className={styles.link}><Link to="/details-device">Chi tiết</Link></td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td>
              <div className={styles.statusConnect}>
                <span className={styles.actionsSuccess}></span>
                <p className={styles.titleSuccess}>Kết nối</p>
              </div>
            </td>
            <td>
              <p className={styles.element}>Khám tim mạch, Khám mắt</p>
              <a href="" className={styles.linkUpdate}>Xem thêm</a>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td>
              <div className={styles.statusConnect}>
                <span className={styles.actionsConnect}></span>
                <p className={styles.titleConnect}>Mất kết nối</p>
              </div>
            </td>
            <td>
              <p className={styles.element}>Khám tim mạch, Khám mắt</p>
              <a href="" className={styles.linkUpdate}>Xem thêm</a>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td className={styles.status}>
              <span className={styles.actions}></span>
              <p className={styles.title}>Ngưng hoạt động</p>
            </td>
            <td>
              <div className={styles.statusConnect}>
                <span className={styles.actionsConnect}></span>
                <p className={styles.titleConnect}>Mất kết nối</p>
              </div>
            </td>
            <td>
              <p className={styles.element}>Khám tim mạch, Khám mắt</p>
              <a href="" className={styles.linkUpdate}>Xem thêm</a>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td className={styles.status}>
              <span className={styles.actions}></span>
              <p className={styles.title}>Ngưng hoạt động</p>
            </td>
            <td>
              <div className={styles.statusConnect}>
                <span className={styles.actionsConnect}></span>
                <p className={styles.titleConnect}>Mất kết nối</p>
              </div>
            </td>
            <td>
              <p className={styles.element}>Khám tim mạch, Khám mắt</p>
              <a href="" className={styles.linkUpdate}>Xem thêm</a>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td className={styles.status}>
              <span className={styles.actions}></span>
              <p className={styles.title}>Ngưng hoạt động</p>
            </td>
            <td>
              <div className={styles.statusConnect}>
                <span className={styles.actionsConnect}></span>
                <p className={styles.titleConnect}>Mất kết nối</p>
              </div>
            </td>
            <td>
              <p className={styles.element}>Khám tim mạch, Khám mắt</p>
              <a href="" className={styles.linkUpdate}>Xem thêm</a>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td className={styles.status}>
              <span className={styles.actions}></span>
              <p className={styles.title}>Ngưng hoạt động</p>
            </td>
            <td>
              <div className={styles.statusConnect}>
                <span className={styles.actionsConnect}></span>
                <p className={styles.titleConnect}>Mất kết nối</p>
              </div>
            </td>
            <td>
              <p className={styles.element}>Khám tim mạch, Khám mắt</p>
              <a href="" className={styles.linkUpdate}>Xem thêm</a>
            </td>
            <td className={styles.link}><a href="">Chi tiết</a></td>
            <td className={styles.linkUpdate}><a href="">Cập nhật</a></td>
          </tr>
          </tbody>
        </table>
        <div className={styles.addItem}>
            <div className={styles.iconPlus}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            <Link to="/add-item"><p className={styles.titleAddItem}>Thêm thiết bị</p></Link>
        </div>
        </div>
        <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
