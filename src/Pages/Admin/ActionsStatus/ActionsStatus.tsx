import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import styles from './ActionsStatus.module.css'


type StateManagedSelect = { value: string; label: string };
const options = [
  { value: '0', label: 'Tất cả' },
  { value: '1', label: 'Đang chờ' },
  { value: '2', label: 'Đã sử dụng' },
  { value: '3', label: 'Bỏ qua' }
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
type StatusProps = {
  onChange: (newValue: string | null) => void;
};

const ActionsStatus: React.FC<StatusProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<StateManagedSelect | null>(null);

    const handleChange = (newValue: StateManagedSelect | null) => {
      setSelectedOption(newValue);
      onChange(newValue ? newValue.value : null);
    };

    return (
        <div className={styles.box}>
            <h2 className={styles.title}>Tình trạng</h2>
            <Select
                placeholder = 'Tất cả'
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

export default ActionsStatus;
