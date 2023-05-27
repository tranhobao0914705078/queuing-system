import React, { Fragment, useState } from 'react'
import styles from './AddAccount.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import RoleAccount from './Role'
import ActiveStatus from './ActiveStatus'
import { ActionMeta, SingleValue } from 'react-select'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, onSnapshot, query, where, addDoc } from "firebase/firestore";
import { db } from 'firebase-config/firebase';

export const AddAccount= () => {

    const [showPass, setShowPass] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    const toggleShowPassConfirm = () => {
        setShowPassConfirm(!showPassConfirm)
    }
    
    const setInputTypePassword = showPass ? 'text' : 'password';
    const setInputTypeConfirm = showPassConfirm ? 'text' : 'password';

    const eyePass = showPass ? faEye : faEyeSlash;
    const eyePassConfirm = showPassConfirm ? faEye : faEyeSlash;
    
    const [selectedRole, setSelectedRole] = useState(0);
    const [selectedActive, setSelectedActive] = useState(0);

    type StateManagedSelect = {
        value: string;
        label: string;
    };

    const handleRoleChange = (newValue: string | null) => {
        if (newValue) {
            const parseNewValue = parseInt(newValue, 10);
            setSelectedRole(parseNewValue);
        }
    };

    const handleActiveOnchange = (newValue: string | null) => {
        if (newValue) {
            const parseNewValue = parseInt(newValue, 10);
            setSelectedActive(parseNewValue);
        }
    };

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();   
    const colRef = collection(db, "MangeAccount");   
      
    const handleSubmit = async () => {
        if(password === passwordConfirmation) {
            await addDoc(colRef, {
                email: email,
                fullname: fullName,
                password: password,
                phone: phone,
                username: userName,
                rule: selectedRole,
                status: selectedActive
            })
            navigate('/manage-account');
        }else{
            alert('Mật khẩu không trùng khớp nhau!!!');
        }
    };

    const handleCancle = () => {
        navigate('/manage-account');
    }


  return (
    <Fragment>
    <div className={styles.container}>
        <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Cài đặt hệ thống</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbCate}>Quản lý tài khoản</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Thêm tài khoản</h2>
        </div>
        <div className={styles.listDevice}>
            <h2 className={styles.listDeviceTitle}>Quản lý tài khoản</h2>
        </div>
        <div className={styles.content}>
            <h2 className={styles.contentTitle}>Thông tin tài khoản</h2>
            <div className={styles.Flex_input}>
                <div className={styles.inputLeft}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="idDevice">Họ và tên <span>*</span></label>
                        <input type="text" onChange={(e) => setFullName(e.target.value)} className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder="Nhập họ tên" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="nameDevice">Số điện thoại <span>*</span></label>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" id="nameDevice" aria-describedby="emailHelp" placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="ipAddress">Email <span>*</span></label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="ipAddress" aria-describedby="emailHelp" placeholder="Nhập Email" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="typeDevice">Vai trò <span>*</span></label>
                        <RoleAccount onChange={handleRoleChange} />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Tên đăng nhập: <span>*</span></label>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="userPassword">Mật khẩu: <span>*</span></label>
                        <div className={styles.eyePass1} onClick={toggleShowPass}>
                            <FontAwesomeIcon icon={eyePass} />
                        </div>
                        <input type={setInputTypePassword} onChange={(e) => setPassword(e.target.value)} className="form-control" id="userPassword" aria-describedby="emailHelp" placeholder="Nhập mật khẩu" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="userPassword">Nhập lại mật khẩu: <span>*</span></label>
                        <div className={styles.eyePass2} onClick={toggleShowPassConfirm}>
                            <FontAwesomeIcon icon={eyePassConfirm} />
                        </div>
                        <input type={setInputTypeConfirm} onChange={(e) => setPasswordConfirmation(e.target.value)} className="form-control" id="userPassword" aria-describedby="emailHelp" placeholder="Nhập lại mật khẩu" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="typeDevice">Tình trạng <span>*</span></label>
                        <ActiveStatus onChange={handleActiveOnchange}/>
                    </div>
                </div>
            </div>
            <div className={`form-group ${styles.useService}`}>
                <small  id="usedService" className={`form-text text-muted ${styles.requireTitle}`}><span>*</span> Là trường thông tin bắt buộc.</small>
            </div>
            <div className={styles.btnActions}>
                <button onClick={handleCancle} className={styles.cancel}>Hủy bỏ</button>
                <button onClick={handleSubmit} className={styles.addItem}>Thêm tài khoản</button>
            </div>
        </div>
    </div>
    </Fragment>
  )
}
