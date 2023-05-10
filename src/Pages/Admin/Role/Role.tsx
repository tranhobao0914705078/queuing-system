import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import styles from './Role.module.css'


type StateManagedSelect = { value: string; label: string };
const options = [
  { value: 'option1', label: 'Kế toán' },
  { value: 'option2', label: 'Quản lý' },
  { value: 'option3', label: 'Admin' }
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

const Role = () => {
    const [selectedOption, setSelectedOption] = useState<SingleValue<StateManagedSelect>>(options[0]);

    const handleChange = (newValue: SingleValue<StateManagedSelect>, actionMeta: ActionMeta<StateManagedSelect>) => {
        setSelectedOption(newValue);
    };

    return (
        <div className={styles.box}>
            <h2 className={styles.title}>Tên vai trò</h2>
            <Select
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

export default Role;
