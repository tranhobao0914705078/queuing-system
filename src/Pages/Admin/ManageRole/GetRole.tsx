import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './ManageRole.module.css'
import { Link } from 'react-router-dom'
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const GetRole = () => {

    const [listRole, setListRole] = useState<any>([]);
    const [filterRole, setFilterRole] = useState("");

    useEffect(() => {
        const colRef = collection(db, "ManageRule");
        const newRef = filterRole ? query(colRef, where("rule_name", "==", filterRole)) : colRef;
        onSnapshot(newRef, (snapshot) => {
            const results: any[] = [];
            snapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setListRole(results);
        })
    }, [filterRole])

  return (
    <div>
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <div className={styles.box}>
                <h2 className={styles.title}>Từ khóa</h2>
                <input type="text" onChange={(e) => setFilterRole(e.target.value)} className={styles.inputSearch} placeholder='Nhập từ khóa'/>
                <FontAwesomeIcon  icon={faSearch} className={styles.iconSearch}/>
            </div>
          </div>
        </div>
        <table>
        <thead>
          <tr>
            <th>Tên vai trò</th>
            <th>Số người dùng</th>
            <th style={{width: '150px'}}>Mô tả</th>
            <th style={{width: '50px'}}></th>
          </tr>
          </thead>
          <tbody>
            {listRole.length > 0 && listRole.map((role: any) =>  
                <tr>
                    <td>{role.rule_name}</td>
                    <td>{role.rule_total}</td>
                    <td>{role.rule_des}</td>
                    <td className={styles.linkUpdate}><Link to={`/update-role/${role.id}`}>Cập nhật</Link></td>
                </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}
