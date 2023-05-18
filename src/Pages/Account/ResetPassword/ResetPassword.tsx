import styles from './ResetPassword.module.css'
import logoRegister from '../Image/logo-resetPass.png'
import logoImg from '../Image/logo.png';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { updatePassword } from 'firebase/auth';
import { auth } from 'firebase-config/firebase';
import { useForm } from 'react-hook-form';
import { confirmPasswordReset } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const ResetPassword = () => {

    const [showPass, setShowPass] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    const toggleConfirmShowPass = () => {
        setShowPassConfirm(!showPassConfirm);
    }

    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const oobCode = searchParams.get('oobCode');
        // Xử lý oobCode và thực hiện các tác vụ liên quan đến đặt lại mật khẩu
      }, [location]);
    
    const { handleSubmit, control } = useForm({
        mode: "onSubmit",
    });
    const navigate = useNavigate();
    const oobCode = useRef(null);
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const oobCode = queryParams.get("oobCode");

        if (!oobCode) {
        navigate("/");
        }
    }, []);
    const onSubmit = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const oobCode = queryParams.get("oobCode");
        if (oobCode) {
            confirmPasswordReset(auth, oobCode, password).then(() => {
            navigate("/");
          });
        }
      };
    const setInputTypePass = showPass ? 'text' : 'password';
    const setInputTypeConfirm = showPassConfirm ? 'text' : 'password';

    const eyePass = showPass ? faEye : faEyeSlash;
    const eyePassConfirm = showPassConfirm ? faEye : faEyeSlash;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <div className={styles.login}>
                        <img width={150} className='mb-5' 
                            src={logoImg} 
                            alt="" />
                        <div className='form-group mt-5'>
                            <label htmlFor='username' className={styles.titleUsername}>Mật Khẩu</label>
                            <div className={styles.eyePass1} onClick={toggleShowPass}>
                                <FontAwesomeIcon icon={eyePass} />
                            </div>
                            <input type={setInputTypePass} value={password} onChange={(e) => setPassword(e.target.value)} name="username" id="username" className="form-control" placeholder='Nhập mật khẩu...'/>
                        </div>
                        <div className='form-group mt-5'>
                            <label htmlFor='password' className={styles.titlePassword}>Nhập Lại Mật Khẩu</label>
                            <div className={styles.eyePass2} onClick={toggleConfirmShowPass}>
                                <FontAwesomeIcon icon={eyePassConfirm} />
                            </div>
                            <input type={setInputTypeConfirm} value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} name="password" id="password" className="form-control" placeholder='Nhập lại mật khẩu...'/>
                        </div>

                        <p className={styles.errorResetPass}></p>
                        {/* <a href="" className={styles.btnLogin} onClick={handleLogin}>
                            Đăng Nhập
                        </a> */}
                        <button className={styles.btnConfirm}>Xác Nhận</button>
                </div>
                <div className={styles.banner}>
                    <img
                        // className={styles.logoResetPass}
                        src={logoRegister}
                        alt=""
                    />
                </div>
            </div>
        </form>
      )
}