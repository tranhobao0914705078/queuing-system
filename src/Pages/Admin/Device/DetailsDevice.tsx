import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import styles from './DetailsDevice.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus, faPen } from '@fortawesome/free-solid-svg-icons'

export const DetailsDevice = () => {
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
                <h2>Thông tin thiết bị</h2>
                <div className={styles.Flex_input}>
                    <div className={styles.inputLeft}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Mã thiết bị: </p>
                            <p className={styles.details}>KIO_01</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Tên thiết bị: </p>
                            <p className={styles.details}>Kiosk</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Địa chỉ IP: </p>
                            <p className={styles.details}>128.172.308</p>
                        </div>
                    </div>
                    <div className={styles.inputRight}>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Loại thiết bị: </p>
                            <p className={styles.details}>Kiosk</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Tên đăng nhập: </p>
                            <p className={styles.details}>Linhkyo011</p>
                        </div>
                        <div className={styles.detailDevice}>
                            <p className={styles.idDevice}>Mật khẩu: </p>
                            <p className={styles.details}>CMS</p>
                        </div>
                    </div>
                </div>
                <div className={`form-group ${styles.useService}`}>
                    <p className={styles.idDevice}>Dịch vụ sử dụng: </p>
                    <p className={styles.details}>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</p>
                </div>
            </div>
            <div className={styles.addItem}>
                <div className={styles.iconPlus}>
                    <FontAwesomeIcon icon={faPen}/>
                </div>
                <Link to="/add-item"><p className={styles.titleAddItem}>Cập nhật thiết bị</p></Link>
            </div>
        </div>
    </Fragment>
  )
}
