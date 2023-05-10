import React, { useState } from 'react'
import styles from'./Manage.module.css';
import { faChevronRight, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import Role from '../Role/Role';

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
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <div className={styles.Role}>
                <Role />
            </div>
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
            <th>Tên đăng nhập</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th style={{width: '120px'}}>Email</th>
            <th>Vai trò</th>
            <th style={{width: '120px'}}>Trạng thái hoạt động</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyễn Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/update-account">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@10</td>
            <td>Nguyễn Văn B</td>
            <td>0919236712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@22</td>
            <td>Nguyễn Văn C</td>
            <td>0919116712</td>
            <td>tuyetnguyen222@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsUnConnect}></span>
              <p className={styles.titleSuccess}>Ngưng hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@18</td>
            <td>Nguyễn Văn D</td>
            <td>0919253175</td>
            <td>tuyetnguyen232@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@19</td>
            <td>Nguyễn Văn T</td>
            <td>0919233712</td>
            <td>tuyetnguyen244@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@18</td>
            <td>Nguyễn Văn K</td>
            <td>0919277712</td>
            <td>tuyetnguyen242@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@16</td>
            <td>Nguyễn Văn A</td>
            <td>0919257008</td>
            <td>tuyetnguyen122@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@14</td>
            <td>Nguyễn Văn M</td>
            <td>0919258003</td>
            <td>tuyetnguyen227@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsUnConnect}></span>
              <p className={styles.titleSuccess}>Ngưng hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          <tr>
            <td>tuyetnguyen@13</td>
            <td>Nguyễn Văn L</td>
            <td>0919251274</td>
            <td>tuyetnguyen278@gmail.com</td>
            <td>Kế toán</td>
            <td className={styles.status}>
              <span className={styles.actionsSuccess}></span>
              <p className={styles.titleSuccess}>Hoạt động</p>
            </td>
            <td className={styles.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
          </tr>
          </tbody>
        </table>
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
