import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import styles from './MemoryUser.module.css'
import { CalendarCustom as CustomCalendar } from '../CustomCalender/CustomCalendar'
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const GetUserLogs = () => {

    const [usersLog, setUsersLog] = useState<any>([]);

    useEffect(() => {
        const colRef = collection(db, 'UserLogs');

        onSnapshot(colRef, (snapshot) => {
            const results: any[] = [];
            snapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setUsersLog(results);
        })
    }, [])

  return (
    <div>
        <div className={styles.headerOptions}>
          <div className={styles.options}>
            <CustomCalendar />
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon}/>
            <CustomCalendar />
            <p className={styles.times}>Chọn thời gian</p>
          </div>
        </div>
        <table>
        <thead>
          <tr>
            <th>Tên đăng nhập</th>
            <th>Thời gian tác động</th>
            <th>IP thực hiện</th>
            <th style={{width: '120px'}}>Thao tác thực hiện</th>
          </tr>
          </thead>
          <tbody>
          {usersLog.map((user: any) => 
            <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.time}</td>
                <td>{user.ipDone}</td>
                <td>{user.operation}</td>
            </tr>
          )}
          </tbody>
        </table>
    </div>
  )
}
