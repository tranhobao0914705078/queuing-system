import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import styles from './Role.module.css'


type StateManagedSelect = { value: string; label: string };
const options = [
  { value: 'option1', label: 'Kê toán' },
  { value: 'option2', label: 'Quản lý' },
  { value: 'option3', label: 'Admin' },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FFF2E7' : 'white',
    ':hover': {
      backgroundColor: '#FFF2E7',
      color: '#000'
    },
    textAlign: 'left',
    fontSize: '16px', 
    padding: '8px 12px',
    color: '#000'
  }),
};

const RoleAccount = () => {
    const [selectedOption, setSelectedOption] = useState<SingleValue<StateManagedSelect>>(null);
    const handleChange = (newValue: SingleValue<StateManagedSelect>, actionMeta: ActionMeta<StateManagedSelect>) => {
        setSelectedOption(newValue);
    };

    return (
        <div className={styles.box}>
            <Select
                placeholder='Chọn vai trò'
                value={selectedOption}
                onChange={handleChange}
                options={options}
                styles={customStyles}
                className={styles.select_menu}
                defaultValue={options[0]}
            />
        </div>
    );
};

export default RoleAccount;
