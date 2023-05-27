import React, { Fragment, useState } from 'react'
import styles from './ListRole.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { addDoc, collection } from 'firebase/firestore'
import { db } from 'firebase-config/firebase'
import { useNavigate } from 'react-router'

export const ListRole = () => {

    const [ruleCode, setRuleCode] = useState("201");
    const [ruleDes, setRuleDes] = useState("");
    const [ruleName, setRuleName] = useState("");
    const [ruleTotal, setRuleTotal] = useState("6");
    const [funcGroup, setFuncGroup] = useState({All: "", GroupX: "", GroupY: "", GroupZ: ""});
    const [funcGroupB, setFuncGroupB] = useState({All: "", GroupX: "", GroupY: "", GroupZ: ""});
    const handleGoupAll = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            All: e.target.value
        }));
    }
    const handleGoupAllB = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            All: e.target.value
        }));
    }
    const handleGoupX = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            GroupX: e.target.value
        }))
    }
    const handleGoupBFuncX = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            GroupX: e.target.value
        }));
    }
    const handleGoupY = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            GroupY: e.target.value
        }))
        
    }
    const handleGoupBFuncY = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            GroupY: e.target.value
        }));
    }
    const handleGoupZ = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            GroupZ: e.target.value
        }))
        setFuncGroupB((prev) => ({
            ...prev,
            GroupZ: e.target.value
        }));
    }
    const handleGoupBFuncZ = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            GroupZ: e.target.value
        }));
    }

    const colRef = collection(db, "ManageRule");
    const navigate = useNavigate();
    const addRule = async () => {
        if(ruleCode === '' || ruleDes === ''){
            alert("Vui lòng nhập đủ các trường!!!");
        }else{
            await addDoc(colRef, {
                rule_code: ruleCode,
                rule_name: ruleName,
                rule_total: ruleTotal,
                rule_des: ruleDes,
                FuncGroup: funcGroup,
                FuncGroupB: funcGroupB,
            })
            alert('Thêm vai trò thành công');
            navigate("/manage-role");
        }
    }
  return (
    <Fragment>
    <div className={styles.container}>
        <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Cài đặt hệ thống</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbCate}>Quản lý vai trò</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Thêm vai trò</h2>
        </div>
        <div className={styles.listDevice}>
            <h2 className={styles.listDeviceTitle}>Danh sách vai trò</h2>
        </div>
        <div className={styles.content}>
            <h2 className={styles.contentTitle}>Thông tin vai trò</h2>
            <div className={styles.Flex_input}>
                <div className={styles.inputLeft}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="idDevice">Tên vai trò: <span>*</span></label>
                        <input type="text" onChange={(e) => setRuleName(e.target.value)} className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder="Tên vai trò" />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Mô tả: <span>*</span></label>
                        <textarea onChange={(e) => setRuleDes(e.target.value)} className={`form-control ${styles.des}`} id="userName" placeholder="Mô tả vai trò" />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Phân quyền chức năng: <span>*</span></label>
                    <div className={styles.options}>
                        <div className={styles.groupA}>
                            <h4 className={styles.optionsA}>Nhóm chức năng A</h4>
                            <div className={`form-check ${styles.customChecked}`}>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupAll} value="Tất cả" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Tất cả
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupX} value="X" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng x
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupY} value="Y" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng y
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupZ} value="Z" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng z
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.groupB}>
                            <h4 className={styles.optionsA}>Nhóm chức năng B</h4>
                            <div className={`form-check ${styles.customChecked}`}>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupAllB} value="Tất cả" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Tất cả
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupBFuncX} value="X" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng x
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupBFuncY} value="Y" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng y
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGoupBFuncZ} value="Z" type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng z
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.btnActions}>
            <button className={styles.cancel}>Hủy bỏ</button>
            <button className={styles.addItem} onClick={addRule}>Thêm dịch vụ</button>
        </div>
    </div>
    </Fragment>
  )
}
