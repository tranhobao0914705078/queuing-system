import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import styles from './CustomerService.module.css'


type StateManagedSelect = { value: string; label: string };
const options = [
  { value: '', label: 'Tất cả' },
  { value: 'option2', label: 'Khám sản - Phụ khoa' },
  { value: 'option3', label: 'Khám răng hàm mặt' },
  { value: 'option4', label: 'Khám tai muĩ họng' }
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

const CustomerService = () => {
    const [selectedOption, setSelectedOption] = useState<SingleValue<StateManagedSelect>>(options[0]);

    const handleChange = (newValue: SingleValue<StateManagedSelect>, actionMeta: ActionMeta<StateManagedSelect>) => {
        setSelectedOption(newValue);
    };

    return (
        <div className={styles.box}>
            <p className={styles.title}>Dịch vụ khách hàng lựa chọn</p>
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

export default CustomerService;
