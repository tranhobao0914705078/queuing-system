import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import styles from './Information.module.css';
import iconUser from './Image/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCamera } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const Information = () => {

  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    const colRef = collection(db, "User");
    onSnapshot(colRef, (snapshot) => {
    const results: any[] = [];
    snapshot.forEach((doc) => {
        results.push({
        id: doc.id,
        ...doc.data(),
        });
    });
    setUser(results);
    });
  }, []);

  return (
    <Fragment>
    <div className={styles.container}>
      {/*  */}
      {user.map((user: any) => 
          <div className={styles.infoDetails} key={user}>
          <div className={styles.userLeft}>
            <div className={styles.imageUser}>
              <img src={iconUser} alt="" />
              <FontAwesomeIcon icon={faCamera} className={styles.iconCamera}/>
              <h2>{user.fullname}</h2>
            </div>
          </div>
          <div className={styles.userRight}>
            <div className={styles.inputUserLeft}>
              <div className="form-group" style={{display: 'flex'}}>
                <label htmlFor="fullName" className={styles.labelUser}>Tên người dùng</label>
                <input type="text" className="form-control" id="fullName" value={user.fullname} />
              </div>
              <div className="form-group" style={{display: 'flex', margin: '60px 0'}}>
                <label htmlFor="numberPhone" className={styles.labelUser}>Số điện thoại</label>
                <input type="text" className="form-control" id="numberPhone" value={user.phone} />
              </div>
              <div className="form-group" style={{display: 'flex'}}>
                <label htmlFor="email" className={styles.labelUser}>Email</label>
                <input type="email" className="form-control" id="email" value={user.email} />
              </div>
            </div>
            <div className={styles.inputUserRight}>
              <div className="form-group" style={{display: 'flex'}}>
                <label htmlFor="username" className={styles.labelUserRight}>Tên đăng nhập</label>
                <input type="text" className="form-control" id="username" value={user.username} />
              </div>
              <div className="form-group" style={{display: 'flex', margin: '60px 0'}}>
                <label htmlFor="password" className={styles.labelUserRight}>Mật khẩu</label>
                <input type="text" className="form-control" id="password" value={user.password} />
              </div>
              <div className="form-group" style={{display: 'flex'}}>
                <label htmlFor="position" className={styles.labelUserRight}>Vai trò</label>
                <input type="text" className="form-control" id="position" value={user.position} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </Fragment>
  )
}
