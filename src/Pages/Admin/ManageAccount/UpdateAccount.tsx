import React, { Fragment, useState } from 'react'
import styles from './UpdateAccount.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import RoleAccount from './Role'
import ActiveStatus from './ActiveStatus'
import { useNavigate, useParams } from 'react-router'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from 'firebase-config/firebase'

export const UpdateAccount = () => {

    const [showPass, setShowPass] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);
    const [role, setRole] = useState(0);
    const [status, setStatus] = useState(0);

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
    const navigate = useNavigate();
    const {id} = useParams();
    const [fullName, setFullName] = useState("");
    const [fullNameUpdate, setFullNameUpdate] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneUpdate, setPhoneUpdate] = useState("");
    const [email, setEmail] = useState("");
    const [emailUpdate, setEmailUpdate] = useState("");
    const [userName, setUserName] = useState("");
    const [userNameUpdate, setUserNameUpdate] = useState("");
    const [password, setPassword] = useState("");
    const [passwordUpdate, setPasswordUpdate] = useState("");
    const [checkPass, setCheckPass] = useState("");
    const [checkPassCofirm, setCheckPassCofirm] = useState("");
    if (!id) return null;
    const docRef = doc(db, "MangeAccount", id);
    const getId = async () => {
        const account = await getDoc(docRef);
        if (account.exists()) {
            setFullName(account.data()?.fullname);
            setPhone(account.data()?.phone);
            setEmail(account.data()?.email);
            setUserName(account.data()?.username);
            setPassword(account.data()?.password);
        } else {
            console.log('Document does not exist!');
    }
    };
    getId();

    const update = async () => {
        // Kiểm tra nếu không nhập dữ liệu, sử dụng giá trị ban đầu
        const updatedFullName = fullNameUpdate || fullName;
            const updatedPhone = phoneUpdate || phone;
            const updatedEmail = emailUpdate || email;
            const updatedUserName = userNameUpdate || userName;
            const updatedPassword = passwordUpdate || password;
        
            await updateDoc(docRef, {
                email: updatedEmail,
                fullname: updatedFullName,
                password: updatedPassword,
                phone: updatedPhone,
                username: updatedUserName,
                role: role,
                status: status
            });
            alert("success");
            navigate('/manage-account');
      }

    const handleOnchange = (newValue: string | null) => {
        if(newValue){
            const parseNewValue = parseInt(newValue, 10);
            console.log(parseNewValue);
            setRole(parseNewValue);
        }
    }

    const handleActiveOnchange = (newValue: string | null) => {
        if(newValue){
            const parseNewValue = parseInt(newValue, 10);
            console.log(parseNewValue);
            setStatus(parseNewValue);
        }
    }

  return (
    <Fragment>
    <div className={styles.container}>
        <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Cài đặt hệ thống</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbCate}>Quản lý tài khoản</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Cập nhật tài khoản</h2>
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
                        <input type="text" onChange={(e) => setFullNameUpdate(e.target.value)} className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder={fullName} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="nameDevice">Số điện thoại <span>*</span></label>
                        <input type="text" onChange={(e) => setPhoneUpdate(e.target.value)} className="form-control" id="nameDevice"  aria-describedby="emailHelp" placeholder={phone} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="ipAddress">Email <span>*</span></label>
                        <input type="email" onChange={(e) => setEmailUpdate(e.target.value)} className="form-control" id="ipAddress" aria-describedby="emailHelp" placeholder={email} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="typeDevice">Vai trò <span>*</span></label>
                        <RoleAccount onChange={handleOnchange}/>
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Tên đăng nhập: <span>*</span></label>
                        <input type="text" onChange={(e) => setUserNameUpdate(e.target.value)} className="form-control" id="userName" aria-describedby="emailHelp" placeholder={userName} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="userPassword">Mật khẩu: <span>*</span></label>
                        <div className={styles.eyePass1} onClick={toggleShowPass}>
                            <FontAwesomeIcon icon={eyePass} />
                        </div>
                        <input type={setInputTypePassword} onChange={(e) => setPasswordUpdate(e.target.value)} value={password} className="form-control" id="userPassword" aria-describedby="emailHelp" placeholder={password} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="userPassword">Nhập lại mật khẩu: <span>*</span></label>
                        <div className={styles.eyePass2} onClick={toggleShowPassConfirm}>
                            <FontAwesomeIcon icon={eyePassConfirm} />
                        </div>
                        <input type={setInputTypeConfirm} value={password} className="form-control" id="userPassword" aria-describedby="emailHelp" placeholder={password} />
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
                <button className={styles.cancel}>Hủy bỏ</button>
                <button className={styles.addItem} onClick={() => {update()}}>Cập nhật tài khoản</button>
            </div>
        </div>
    </div>
    </Fragment>
  )
}
