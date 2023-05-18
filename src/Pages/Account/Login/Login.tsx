import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import styles from './styles.module.css'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bannerImg from '../Image/banner.png';
import logoImg from '../Image/logo.png';
import { onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from 'firebase-config/firebase';

export const Login = () => {
    const [showPass, setShowPass] = useState(false);
    
    const toggleShowPass = () => {
        setShowPass(!showPass);
    }
    const inputTypePassword = showPass ? 'text' : 'password';
    const eyePass = showPass ? faEye : faEyeSlash;
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    

    const handleLogin = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            navigate("/dashboard")
        }catch(error){
            const errorMessage = 'Sai mật khẩu. Vui lòng thử lại!';
            setErrorLogin(errorMessage);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <img width={150} className='mb-5' 
                src={logoImg} 
                alt="" />
            <div className='form-group mt-5'>
                <label htmlFor='username' className={styles.titleUsername}>Tên Đăng Nhập *</label>
                <input type="text" onChange={(e) => setLoginEmail(e.target.value)} name="username" id="username" className="form-control"  placeholder='Tên đăng nhập...'/>
            </div>
            <div className='form-group mt-5'>
                <label htmlFor='password' className={styles.titlePassword}>Mật Khẩu *</label>
                <div className={styles.eyePass} onClick={toggleShowPass}>
                    <FontAwesomeIcon icon={eyePass} />
                </div>
                <input type={inputTypePassword} onChange={(e) => setLoginPassword(e.target.value)} name="password" id="password" className="form-control" placeholder='Mật Khẩu...'/>
            </div>
            {errorLogin && <p className={styles.errorLogin}>{errorLogin}</p>}
            <Link className={styles.forgotPassword} to="/send-mail">Quên mật khẩu?</Link>
            <button className={styles.btnLogin} onClick={handleLogin} type='submit'>Đăng Nhập</button>
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