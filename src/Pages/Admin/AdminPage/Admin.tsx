import React, { Fragment, useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faTableColumns, faDesktop, faCommentAlt, faBars, faFile, faGear, faEllipsisVertical, faBell, faCamera } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; 
import iconUser from './user.png';
import { Wrapper } from '../Popper';
import MenuSetting from '../Popper/Menu';
import { Link, useLocation } from 'react-router-dom';
import { Notify } from '../Notify/Notify';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from 'firebase-config/firebase';
import { useNavigate } from 'react-router-dom';


const MENU_SETTING = [
  {
    title: "Quản lý vai trò",
    link: "/manage-role"
  },
  {
    title: "Quản lý tài khoản",
    link: "/manage-account"
  },
  {
    title: "Nhật ký người dùng",
    link: "/memory-user"
  }
]
export const Admin = () => {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      });

      return () => {
        unsubscribe();
      };
    }, []);
    

    const handleLogOut = async () => {
      await signOut(auth);
      navigate("/")
    }

  useEffect(() => {
    const path = location.pathname;
    if(path === '/dashboard'){
      setActiveItem('dashboard')
    }else if(path === '/device'){
      setActiveItem('device')
    }else if(path === '/manage-service'){
      setActiveItem('service')
    }else if(path === '/manage-number'){
      setActiveItem('manageNumber')
    }else if(path === '/report'){
      setActiveItem('report')
    }
  }, [location]) 

  return (
    <Fragment>
      <ul className={`navbar-nav sidebar sidebar-dark accordion`} id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
          <img width={100} src={Logo} alt="" />
        </Link>
        <hr className="sidebar-divider my-0"/>
        <li className={`nav-item ${activeItem === 'dashboard' ? styles.active : ''} ${styles.Category}`}>
          <Link className={`nav-link`} to="/dashboard" onClick={() => setActiveItem('dashboard')}>
            <FontAwesomeIcon icon={faTableColumns} className={styles.dashboardIcon}/>
            <span className={styles.title}>Dashboard</span>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === 'device' ? styles.active : ''} ${styles.Category}`}>
          <Link className="nav-link" to="/device" onClick={() => setActiveItem('device')}>
            <FontAwesomeIcon icon={faDesktop} className={styles.dashboardIcon}/>
            <span className={styles.title}>Thiết bị</span>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === 'service' ? styles.active : ''} ${styles.Category}`}>
          <Link className="nav-link" to="/manage-service">
          <FontAwesomeIcon icon={faCommentAlt} className={styles.dashboardIcon}/>
            <span className={styles.title}>Dịch vụ</span></Link>
        </li>
        <li className={`nav-item ${activeItem === 'manageNumber' ? styles.active : ''} ${styles.Category}`}>
          <Link className="nav-link" to="/manage-number">
            <FontAwesomeIcon icon={faBars} className={styles.dashboardIcon}/>
            <span className={styles.title}>Cấp số</span></Link>
        </li>
        <li className={`nav-item ${styles.Category}`}>
          <Link className="nav-link" to="/report">
            <FontAwesomeIcon icon={faFile} className={styles.dashboardIcon}/>
            <span className={styles.title}>Báo cáo</span></Link>
        </li>
        <li className={`nav-item ${styles.Category}`}>
          <a className="nav-link" href="index.html">
            <FontAwesomeIcon icon={faGear} className={styles.dashboardIcon}/>
            <span className={styles.title}>Cài đặt hệ thống</span></a>
            <MenuSetting items={MENU_SETTING}>
                <button className={styles.settingVertical}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </MenuSetting>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <div>
        <button className={styles.btnLogout} onClick={handleLogOut}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.btnIcon}/>
            Đăng xuất
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.infoDes}>
        <Tippy
          interactive = {true}
          render={attrs => (
            <div>
              <div className={styles.notification} tabIndex={parseInt("-1")} {...attrs}>
                <Wrapper>
                  <h3 className={styles.headerNotification}>Thông báo</h3>
                  <Notify />
                  <Notify />
                  <Notify />
                  <Notify />
                  <Notify />
                  <Notify />
                </Wrapper>
              </div>
            </div>
          )}
        >
          <FontAwesomeIcon icon={faBell} className={styles.iconBell}/>
        </Tippy>
            <div className={styles.infoUser}>
              <Link to={"/information"}><img src={iconUser} alt="avatar" /></Link>
              <div className={styles.userName}>
                <p className={styles.welcome}>Xin chào</p>
                {user && <p className={styles.name}>{user.email}</p>}
              </div>
            </div>
        </div>
      </div>
    </Fragment>
  )
}