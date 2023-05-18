import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './SendMail.module.css'
import logoRegister from '../Image/logo-resetPass.png'
import logoImg from '../Image/logo.png';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'firebase-config/firebase';

export const SendMail = () => {

    const [email, setEmail] = useState("");
    const [resetSent, setResetSent] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        try{
            await sendPasswordResetEmail(auth, email);
            setResetSent(true);
        }catch(error){  
            const errorMessage = 'Có lỗi xảy ra. Vui lòng thử lại sau.';
            setError(errorMessage);
        }
    }

    const handleCancel = () => {
       navigate('/'); 
    }

    const moveResetPassword = () => {
        navigate('/');
    }

  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <img width={150} className='mb-5' 
                src={logoImg} 
                alt="" />
            <div className='form-group mt-5'>
                <label htmlFor='username' className={styles.title1}>Đặt lại mật khẩu</label>
                {
                    !resetSent ? (
                        <>
                            <p className={styles.title2}>Vui lòng nhập lại email để đặt lại mật khẩu của bạn * </p>
                            <input 
                                type="email"
                                id="email"
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className={styles.btnAction}>
                                <button className={styles.btnCancel} onClick={handleCancel}>Hủy</button>
                                <button className={styles.btnContinue} onClick={handleResetPassword}>Tiếp Tục</button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <p className={styles.resetSentMessage}>Đã gửi email đặt lại mật khẩu. Vui lòng kiểm tra hộp thư đến của bạn.</p>
                            <button className={styles.btnContinue} onClick={moveResetPassword}>Tiếp Tục</button>
                        </div>
                    )
                }
                {error && <p className={styles.error}>{error}</p>}
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