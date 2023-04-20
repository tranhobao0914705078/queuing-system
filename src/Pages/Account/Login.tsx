import React, { useState } from 'react'
import styles from './styles.module.css'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bannerImg from './Image/banner.png';
import logoImg from './Image/logo.png';

export const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    const inputTypePassword = showPass ? 'text' : 'password';
    const eyePass = showPass ? faEye : faEyeSlash;
  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <img width={150} className='mb-5' 
                src={logoImg} 
                alt="" />
            <div className='form-group mt-5'>
                <label htmlFor='username' className={styles.titleUsername}>Tên Đăng Nhập *</label>
                <input type="text" name="username" id="username" className="form-control" placeholder='Tên đăng nhập...'/>
            </div>
            <div className='form-group mt-5'>
                <label htmlFor='password' className={styles.titlePassword}>Mật Khẩu *</label>
                <div className={styles.eyePass} onClick={toggleShowPass}>
                    <FontAwesomeIcon icon={eyePass} />
                </div>
                <input type={inputTypePassword} name="password" id="password" className="form-control" placeholder='Mật Khẩu...'/>
            </div>
            <a className={styles.forgotPassword} href="#">Quên mật khẩu?</a>
            <a href="/admin" className={styles.btnLogin}>
                Đăng Nhập
            </a>
        </div>
        <div className={styles.banner}>
           <img 
            width={430}
            className={styles.bannerImage}
            src={bannerImg}
            alt="" />
            <div className={styles.titleBanner}>
                <h3 className = {styles.system}>Hệ thống</h3>
                <h2 className = {styles.line}>QUẢN LÝ XẾP HÀNG</h2>
            </div>
        </div>
    </div>
  )
}
