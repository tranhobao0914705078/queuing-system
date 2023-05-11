import React from 'react'
import styles from './Dashboard.module.css'

export const Dashboard = () => {
  return (
    <div className={styles.menuRight}>
        <div className={styles.overview}>
          <div className={styles.title}>
            <h2 className={styles.titleOverview}>Tổng quan</h2>
          </div>
          <div className={styles.box1}>
            <div className={styles.boxLeft}>
              <div className={styles.info}>
              <div className={styles.boxRound}>
                <div className={styles.circle}>
                  <div className={styles.circleChildren}>
                    <div className={styles.circleChildren2}>
                        <p className={styles.percent}>86%</p>
                    </div>
                  </div>
                </div>
              </div>
                <p>adads</p>
              </div>
            </div>
            <div className={styles.boxRight}></div>
          </div>
        </div>
    </div>
  )
}
