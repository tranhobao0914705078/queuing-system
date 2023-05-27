import React, { Fragment, useState } from 'react'
import styles from './ListRole.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router'
import { db } from 'firebase-config/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

export const UpdateRole = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [roleCode, setRoleCode] = useState("");
    const [roleCodeUpdate, setRoleCodeUpdate] = useState("");
    const [roleDes, setRoleDes] = useState("");
    const [roleDesUpdate, setRoleDesUpdate] = useState("");
    const [checkedAll, setCheckedAll] =useState("");
    const [checkedAllGroupB, setCheckedAllGroupB] =useState(""); 
    const [checkedX, setCheckedX] =useState("");   
    const [checkedXGroupB, setCheckedXGroupB] =useState("");   
    const [checkedY, setCheckedY] =useState("");    
    const [checkedYGroupB, setCheckedYGroupY] =useState("");    
    const [checkedZ, setCheckedZ] =useState("");
    const [checkedZGroupB, setCheckedZGroupB] =useState("");
    const [funcGroup, setFuncGroup] = useState({All: "", GroupX: "", GroupY: "", GroupZ: ""});
    const [funcGroupB, setFuncGroupB] = useState({All: "", GroupX: "", GroupY: "", GroupZ: ""});
    
    const handleGroupAll = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            All: e.target.value
        }));
    }
    const handleGroupAllB = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            All: e.target.value
        }));
    }
    const handleGroupX = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            GroupX: e.target.value
        }))
    }
    const handleGroupBFuncX = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            GroupX: e.target.value
        }));
    }
    const handleGroupY = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            GroupY: e.target.value
        }))
        
    }
    const handleGroupBFuncY = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            GroupY: e.target.value
        }));
    }
    const handleGroupZ = (e:any) => {
        setFuncGroup((prev) => ({
            ...prev,
            GroupZ: e.target.value
        }))
        setFuncGroupB((prev) => ({
            ...prev,
            GroupZ: e.target.value
        }));
    }
    const handleGroupBFuncZ = (e:any) => {
        setFuncGroupB((prev) => ({
            ...prev,
            GroupZ: e.target.value
        }));
    }

    if(!id) return null;
    const docRef = doc(db, "ManageRule", id);
    const getId = async () => {
        const rule = await getDoc(docRef);
        if(rule.exists()){
            setRoleCode(rule.data()?.rule_code);
            setRoleDes(rule.data()?.rule_des);
            setCheckedAll(rule.data()?.FuncGroup.All);
            setCheckedAllGroupB(rule.data()?.FuncGroupB.All);
            setCheckedX(rule.data()?.FuncGroup.GroupX);
            setCheckedXGroupB(rule.data()?.FuncGroupB.GroupX);
            setCheckedY(rule.data()?.FuncGroup.GroupY);
            setCheckedYGroupY(rule.data()?.FuncGroupB.GroupY);
            setCheckedZ(rule.data()?.FuncGroup.GroupZ);
            setCheckedZGroupB(rule.data()?.FuncGroupB.GroupZ);
        }
    }
    getId();
    const update = async () => {
        const updateRoleCode = roleCodeUpdate || roleCode;
        const updateRoleDes = roleDesUpdate || roleDes;
        let updateFuncGroupA;
        let updateFuncGroupB;

        if(funcGroup){
            updateFuncGroupA = funcGroup;
        }else if(checkedAll || checkedX || checkedY || checkedZ){
            updateFuncGroupA = checkedAll || checkedX || checkedY || checkedZ;
        }

        if(funcGroupB){
            updateFuncGroupB = funcGroupB;
        }else if(checkedAllGroupB || checkedXGroupB || checkedYGroupB || checkedZGroupB){
            updateFuncGroupA = checkedAllGroupB || checkedXGroupB || checkedYGroupB || checkedZGroupB;
        }

        await updateDoc(docRef, {
            rule_code: updateRoleCode,
            rule_des: updateRoleDes,
            FuncGroup: updateFuncGroupA,
            funcGroupB: updateFuncGroupB
        });
        alert("Cập nhật thành công!!!");
        navigate('/manage-role');
    }
  return (
    <Fragment>
    <div className={styles.container}>
    <div className={styles.breadCrumb}>
          <h2 className={styles.breadCrumbCate}>Cài đặt hệ thống</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbCate}>Quản lý vai trò</h2>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadCrumbIcon}/>
          <h2 className={styles.breadCrumbDetail}>Cập nhật vai trò</h2>
        </div>
        <div className={styles.listDevice}>
            <h2 className={styles.listDeviceTitle}>Danh sách vai trò</h2>
        </div>
        <div className={styles.content}>
            <h2 className={styles.contentTitle}>Thông tin vai trò</h2>
            <div className={styles.Flex_input}>
                <div className={styles.inputLeft}>
                    <div className="form-group">
                        <label className={styles.labelName} htmlFor="idDevice">Mã vai trò: <span>*</span></label>
                        <input type="text" onChange={(e) => setRoleCodeUpdate(e.target.value)} className="form-control" id="idDevice" aria-describedby="emailHelp" placeholder={roleCode} />
                    </div>
                    <div className="form-group">
                        <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Mô tả: <span>*</span></label>
                        <textarea onChange={(e) => setRoleDesUpdate(e.target.value)} className={`form-control ${styles.des}`} id="userName" placeholder={roleDes} />
                    </div>
                </div>
                <div className={styles.inputRight}>
                    <label className={styles.labelName} style={{width: '200px'}} htmlFor="userName">Phân quyền chức năng: <span>*</span></label>
                    <div className={styles.options}>
                        <div className={styles.groupA}>
                            <h4 className={styles.optionsA}>Nhóm chức năng A</h4>
                            <div className={`form-check ${styles.customChecked}`}>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGroupAll} value="Tất cả" checked={checkedAll !== ''} type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Tất cả
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGroupX} value="X" checked={checkedAll !== '' || checkedX !== ''} type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng x
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGroupY} value="Y" checked={checkedAll !== '' || checkedY !== ''} type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng y
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGroupZ} value="Z" checked={checkedAll !== '' || checkedZ !== ''} type="checkbox"/>
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
                                    <input className="form-check-input" onChange={handleGroupAllB} value="Tất cả" checked={checkedAllGroupB !== ''} type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Tất cả
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGroupBFuncX} value="X" checked={checkedAllGroupB !== '' || checkedXGroupB !== ''} type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng x
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGroupBFuncY} value="Y" checked={checkedAllGroupB !== '' || checkedYGroupB !== ''} type="checkbox"/>
                                    <label className={`form-check-label ${styles.customLabel}`} htmlFor="flexCheckDefault">
                                        Chức năng y
                                    </label>
                                </div>
                                <div className={styles.checkboxCustom}>
                                    <input className="form-check-input" onChange={handleGroupBFuncZ} value="Z" checked={checkedAllGroupB !== '' || checkedZGroupB !== ''} type="checkbox"/>
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
            <button className={styles.addItem} onClick={update}>Cập nhật dịch vụ</button>
        </div>
    </div>
    </Fragment>
  )
}
