import React from 'react'
import { Admin } from "./AdminPage/Admin";
import styles from './DefaultLayout.module.css';

interface Props {
    children: React.ReactNode;
}
function DefaultLayout( { children }: Props ) {
    return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
              <Admin />
              <div className={styles.content}>
                  {children}
              </div>
          </div>
        </div>
    )
}

export default DefaultLayout;
