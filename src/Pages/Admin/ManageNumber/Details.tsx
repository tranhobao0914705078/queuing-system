import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import styles from './Details.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus, faRotateLeft } from '@fortawesome/free-solid-svg-icons'

export const Details = () => {
  return (
    <Fragment>
        <div className={styles.container}>
            <div className={styles.breadCrumb}>
                <h2 className={styles.breadCrumbCate}>Thiết bị</h2>
                <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
                <h2 className={styles.breadCrumbCate}>Danh sách cấp số</h2>
                <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
                <h2 className={styles.breadCrumbDetail}>Chi tiết</h2>
            </div>
            <div className={styles.listDevice}>
                <h2 className={styles.listDeviceTitle}>Quản lý cấp số</h2>
            </div>

            <div className={styles.content}>
                <h2>Thông tin cấp số</h2>
                <div className={styles.Flex_input}>
                    <div className={styles.inputLeft}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Họ và tên: </p>
                            <p className={styles.details}>Nguyễn Thị Dung</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Tên dịch vụ: </p>
                            <p className={styles.details}>Khám tim mạch</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Số thứ tự: </p>
                            <p className={styles.details}>2001201</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Thời gian cấp: </p>
                            <p className={styles.details}>14:35- 07/11/2021</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Hạn sử dụng: </p>
                            <p className={styles.details}>18:00- 07/11/2021</p>
                        </div>
                    </div>
                    <div className={styles.inputRight}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Nguồn cấp: </p>
                            <p className={styles.details}>Kiosk</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Trạng thái: </p>
                            <div className={styles.status}>
                                <span className={styles.actionsWaiting}></span>
                                <p className={`${styles.titleSuccess} ${styles.details}`}>Đang chờ</p>
                            </div>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Số điện thoại: </p>
                            <p className={styles.details}>0948523623</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Địa chỉ email: </p>
                            <p className={styles.details}>nguyendung@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.addItem}>
                <div className={styles.iconPlus}>
                    <FontAwesomeIcon icon={faRotateLeft}/>
                </div>
                <Link to="/add-item"><p className={styles.titleAddItem}>Quay lại</p></Link>
            </div>
        </div>
    </Fragment>
  )
}
