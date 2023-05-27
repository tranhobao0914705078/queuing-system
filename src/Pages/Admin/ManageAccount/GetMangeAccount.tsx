import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Manage.module.css'
import Role from '../Role/Role'
import { Link } from 'react-router-dom'
import { collection, getDocs, onSnapshot, query, where, CollectionReference, Query, DocumentData } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const GetMangeAccount = () => {

    const [accountList, setAcccountList] = useState<any>([]);
    const [filterAccount, setFilterAccount] = useState("");
    const [selectedRole, setSelectedRole] = useState(0);

    const handleRoleChange = (newValue: string | null) => {
      if (newValue) {
          const parseNewValue = parseInt(newValue, 10);
          setSelectedRole(parseNewValue);
      }
    };

    useEffect(() => {
      const colRef: CollectionReference = collection(db, 'MangeAccount');
      let newRef: Query<DocumentData> = colRef;
      if (filterAccount && selectedRole !== 0) {
        newRef = query(colRef, where('rule', '==', selectedRole), where('username', '==', filterAccount));
      } else if (filterAccount) {
        newRef = query(colRef, where('username', '==', filterAccount));
      } else if (selectedRole !== 0) {
        newRef = query(colRef, where('rule', '==', selectedRole));
      }
      onSnapshot(newRef, (snapshot) => {
        const results: any[] = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setAcccountList(results);
      });
    }, [filterAccount, selectedRole]);
    

  return (
    <div>
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <div className={styles.Role}>
                <Role onChange={handleRoleChange}/>
            </div>
            <div className={styles.box}>
                <h2 className={styles.title}>Từ khóa</h2>
                <input onChange={(e) => setFilterAccount(e.target.value)} type="text" className={styles.inputSearch} placeholder='Nhập từ khóa'/>
                <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
            </div>
          </div>
        </div>
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
            {accountList.length > 0 && accountList.map((account: any) => 
                <tr>
                    <td>{account.username}</td>
                    <td>{account.fullname}</td>
                    <td>{account.phone}</td>
                    <td>{account.email}</td>
                    <td>{account.rule === 1 ? 'Kế toán' : account.rule === 2 ? 'Quản lý' : 'Admin'}</td>
                    <td className={styles.status}>
                        <span
                            className={account.status === 1 ? styles.actionsSuccess : styles.actionsUnConnect}
                        ></span>
                        <p className={styles.titleSuccess}>{account.status === 1 ? 'Hoạt động' : 'Ngưng hoạt động'}</p>
                    </td>
                    <td className={styles.linkUpdate}><Link to={`/update-account/${account.id}`}>Cập nhật</Link></td>
                </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}
