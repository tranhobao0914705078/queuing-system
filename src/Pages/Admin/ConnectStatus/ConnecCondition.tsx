import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import styles from './ConnecCondition.module.css'


type StateManagedSelect = { value: string; label: string };
const options = [
  { value: '0', label: 'Tất cả' },
  { value: '1', label: 'Kết nối' },
  { value: '2', label: 'Mất kết nối' }
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

type ConnectProps = {
  onChange: (newValue: string | null) => void;
};

const CustomSelectConnect: React.FC<ConnectProps> = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState<StateManagedSelect | null>(null);

    const handleChange = (newValue: StateManagedSelect | null) => {
      setSelectedOption(newValue);
      onChange(newValue ? newValue.value : null);
    };


    return (
        <div className={styles.box}>
            <h2 className={styles.title}>Trạng thái kết nối</h2>
            <Select
                value={selectedOption}
                placeholder="Tất cả"
                onChange={handleChange}
                options={options}
                styles={customStyles}
                className={styles.select_menu}
                defaultValue={options[0]}
            />
        </div>
    );
};

export default CustomSelectConnect;
