import React, { Fragment } from 'react';
import styles from './Information.module.css';
import iconUser from './Image/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCamera } from '@fortawesome/free-solid-svg-icons';


export const Information = () => {
  return (
    <Fragment>
    <div className={styles.container}>
      {/* note */}
      <div className={styles.infoDetails}>
        <div className={styles.userLeft}>
          <div className={styles.imageUser}>
            <img src={iconUser} alt="" />
            <h2>Lê Quỳnh Ái Vân</h2>
          </div>
        </div>
        <div className={styles.userRight}>
          <div className={styles.inputUserLeft}>
            <div className="form-group" style={{display: 'flex'}}>
              <label htmlFor="fullName" className={styles.labelUser}>Tên người dùng</label>
              <input type="text" className="form-control" id="fullName" placeholder="Lê Quỳnh Ái Vân" />
            </div>
            <div className="form-group" style={{display: 'flex', margin: '60px 0'}}>
              <label htmlFor="numberPhone" className={styles.labelUser}>Số điện thoại</label>
              <input type="text" className="form-control" id="numberPhone" placeholder="0123456789" />
            </div>
            <div className="form-group" style={{display: 'flex'}}>
              <label htmlFor="email" className={styles.labelUser}>Email</label>
              <input type="email" className="form-control" id="email" placeholder="adminSS01@domain.com" />
            </div>
          </div>
          <div className={styles.inputUserRight}>
            <div className="form-group" style={{display: 'flex'}}>
              <label htmlFor="username" className={styles.labelUserRight}>Tên đăng nhập</label>
              <input type="text" className="form-control" id="username" placeholder="lequynhaivan01" />
            </div>
            <div className="form-group" style={{display: 'flex', margin: '60px 0'}}>
              <label htmlFor="password" className={styles.labelUserRight}>Mật khẩu</label>
              <input type="text" className="form-control" id="password" placeholder="1234" />
            </div>
            <div className="form-group" style={{display: 'flex'}}>
              <label htmlFor="position" className={styles.labelUserRight}>Vai trò</label>
              <input type="text" className="form-control" id="position" placeholder="Kế toán" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}
