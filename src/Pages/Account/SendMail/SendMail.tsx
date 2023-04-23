import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './SendMail.module.css'
import logoRegister from '../Image/logo-resetPass.png'
import logoImg from '../Image/logo.png';

export const SendMail = () => {
  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <img width={150} className='mb-5' 
                src={logoImg} 
                alt="" />
            <div className='form-group mt-5'>
                <label htmlFor='username' className={styles.title1}>Đặt lại mật khẩu</label>
                <p className={styles.title2}>Vui lòng nhập lại email để đặt lại mật khẩu của bạn * </p>
                <input type="email" name="email" id="email" className="form-control" placeholder='Vui lòng nhập email của bạn...'/>
            </div>
            <div className={styles.btnAction}>
                <button className={styles.btnCancel}>Hủy</button>
                <button className={styles.btnContinue}>Tiếp Tục</button>
            </div>
        </div>
        <div className={styles.banner}>
           <img
            // className={styles.logoResetPass}
            src={logoRegister}
            alt="" />
        </div>
    </div>
  )
}