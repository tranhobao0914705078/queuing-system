import React, { useState } from 'react'
import styles from'./Calender.module.css';
import { CalendarCustom as Calendar } from '../YearCalendar/CalendarCustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

export const CalendarCustom = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const toggleCalendar = () => {
      setShowCalendar(!showCalendar);
    }

    return (
        <div className={styles.box} onClick={toggleCalendar}>
            <div className={styles.content}>
                <FontAwesomeIcon icon={faCalendarDay} className={styles.iconCalendar}/>
                <p className={styles.time}>{currentDate.toLocaleDateString()}</p>
                {showCalendar && (
                    <div className={styles.calendar}>
                        <Calendar className={styles.customCalendar}/>
                    </div>
                )}
            </div>
        </div>
    );
}
