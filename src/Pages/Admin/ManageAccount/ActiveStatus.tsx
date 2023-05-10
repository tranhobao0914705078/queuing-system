import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import styles from './ActiveStatus.module.css'


type StateManagedSelect = { value: string; label: string };
const options = [
  { value: '', label: 'Tất cả' },
  { value: 'option2', label: 'Ngưng hoạt động' },
  { value: 'option3', label: 'Hoạt động' },
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

const ActiveStatus = () => {
    const [selectedOption, setSelectedOption] = useState<SingleValue<StateManagedSelect>>(null);
    const handleChange = (newValue: SingleValue<StateManagedSelect>, actionMeta: ActionMeta<StateManagedSelect>) => {
        setSelectedOption(newValue);
    };

    return (
        <div className={styles.box}>
            <Select
                placeholder='Chọn tình trạng'
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

export default ActiveStatus;
