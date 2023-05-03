import React, { useState } from 'react'
import styles from'./Calender.module.css';
import { CalendarCustom as Calendar } from '../YearCalendar/CalendarCustom';

export const CalendarCustom = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const toggleCalendar = () => {
      setShowCalendar(!showCalendar);
    }


    return (
        <div className={styles.box} onClick={toggleCalendar}>
            <h2 className={styles.title}>Chọn thời gian</h2>
            <div className={styles.content}>
                <p>asdas</p>
                <p className={styles.time}>{currentDate.toLocaleDateString()}</p>
                {showCalendar && (
                    <div className={styles.calendar}>
                        <Calendar />
                    </div>
                )}
            </div>
        </div>
    );
}
