import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './DetailService.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPen, faRotateLeft, faCaretRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar';
import CustomStatus from '../Status/Status';
import Pagination from '../Pagination/Pagination';


export const DetailService = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = 10;
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }
return (
<Fragment>
   <div className={styles.container}>
      <div className={styles.breadCrumb}>
         <h2 className={styles.breadCrumbCate}>Thiết bị</h2>
         <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
         <h2 className={styles.breadCrumbCate}>Danh sách thiết bị</h2>
         <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
         <h2 className={styles.breadCrumbDetail}>Chi tiết thiết bị</h2>
      </div>
      <div className={styles.listDevice}>
         <h2 className={styles.listDeviceTitle}>Quản lý thiết bị</h2>
      </div>
      <div className={styles.content}>
         <div className={styles.boxLeft}>
            <h2 className={styles.titleBoxLeft}>Thông tin dịch vụ</h2>
            <div className={styles.detailService}>
               <p className={styles.titleDetail}>Mã dịch vụ</p>
               <p className={styles.titleNumber}>201</p>
            </div>
            <div className={styles.detailService}>
               <p className={styles.titleDetail}>Tên dịch vụ</p>
               <p className={styles.titleNumber}>Khám tim mạch</p>
            </div>
            <div className={styles.detailService}>
               <p className={styles.titleDetail}>Mô tả</p>
               <p className={`${styles.titleNumber} ${styles.custom}`}>Chuyên các bệnh lý về tim</p>
            </div>
            <h2 className={styles.title2}>Quy tắc cấp số</h2>
            <div className={`form-group ${styles.useService}`}>
            <div className={styles.ruleNumber}>
               <div className={`form-check ${styles.boxChecked}`}>
               <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
               Tăng tự động từ:
               </label>
            </div>
            <div className={styles.boxChecked1}>
               <div className={styles.rangeTitle}>
                  <p>0001</p>
               </div>
               <p className={styles.titleBox1}>đến</p>
               <div className={styles.rangeTitle}>
                  <p>9999</p>
               </div>
            </div>
         </div>
         <div className={styles.ruleNumber}>
            <div className={`form-check ${styles.boxChecked}`}>
            <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
            Prefix
            </label>
         </div>
         <div className={styles.rangeTitle}>
            <p>0001</p>
         </div>
      </div>
      <div className={styles.ruleNumber}>
         <div className={`form-check ${styles.boxChecked}`}>
         <label className={`form-check-label ${styles.titleLabel}`} htmlFor="flexCheckDefault">
         Reset mỗi ngày
         </label>
      </div>
   </div>
   <small  id="usedService" className={`form-text text-muted ${styles.requireTitle}`}>Ví dụ: 201-2001.</small>
   </div>
   </div>
   <div className={styles.boxRight}>
    <CustomStatus />
    <div className={styles.times}>
        <h2>Chọn thời gian</h2>
        <CustomCalendar />
        <FontAwesomeIcon icon={faCaretRight} className={styles.iconCaret}/>
        <CustomCalendar />
    </div>
    <div className={styles.box}>
        <h2 className={styles.title}>Từ khóa</h2>
        <input type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
        <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
    </div>
    {/* Table */}
    <table className={styles.tableDetailService}>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Trạng thái</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>201001</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201002</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201003</td>
            <td className={styles.status}>
              <span className={styles.processing}></span>
              <p className={styles.title}>Đang thực hiện</p>
            </td>
          </tr>
          <tr>
            <td>201004</td>
            <td className={styles.status}>
              <span className={styles.absent}></span>
              <p className={styles.title}>Vắng</p>
            </td>
          </tr>
          <tr>
            <td>201005</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201006</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201007</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201008</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201009</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201010</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          <tr>
            <td>201011</td>
            <td className={styles.status}>
              <span className={styles.finish}></span>
              <p className={styles.title}>Đã hoàn thành</p>
            </td>
          </tr>
          </tbody>
        </table>
    {/* End table */}
    <div className={styles.Paginate}>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
    </div>
   </div>
   </div>
   <div className={styles.UpdateItem}>
      <div className={styles.iconPlus}>
         <FontAwesomeIcon icon={faPen}/>
      </div>
      <Link to="/add-item">
      <p className={styles.titleUpdateItem}>Cập nhật danh sách</p>
      </Link>
   </div>
   <hr className={styles.line}/>
   <div className={styles.back}>
      <div className={styles.iconPlus}>
         <FontAwesomeIcon icon={faRotateLeft}/>
      </div>
      <Link to="/add-item">
      <p className={styles.titleBack}>Quay lại</p>
      </Link>
   </div>
   </div>
</Fragment>
)
}