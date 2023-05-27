import React, { useEffect, useState } from 'react'
import styles from './Report.module.css'
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from 'firebase-config/firebase';
import { report } from 'process';

export const GetReport = () => {

    const [listReport, setListReport] = useState<any>([]);

    useEffect(() => {
        const colRef = collection(db, 'report');
        onSnapshot(colRef, (snapshot) => {
            const results: any[] = [];
            snapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setListReport(results);
        })
    }, [])

  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Tên dịch vụ</th>
            <th>thời gian cấp</th>
            <th style={{width: '120px'}}>Tình trạng</th>
            <th>Nguồn cấp</th>
          </tr>
          </thead>
          <tbody>
            {listReport.map((report: any) => 
                <tr key={report.id}>
                    <td>{report.report_code}</td>
                    <td>{report.report_name}</td>
                    <td>{report.report_time}</td>
                    <td className={styles.status}>
                        <span
                            className={report.report_status === 1 ? styles.actionsWaiting : report.report_status === 2 ? styles.actionsUsed : styles.actionsCancel}
                        ></span>  
                        <p className={styles.titleSuccess}>
                            {report.report_status === 1 ? 'Đang chờ' : report.report_status === 2 ? 'Đã sử dụng' : 'Bỏ qua'}
                        </p>
                    </td>
                    <td>{report.report_suply}</td>
                </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}
