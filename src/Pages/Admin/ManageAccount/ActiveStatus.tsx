import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue, Props } from 'react-select';
import styles from './ActiveStatus.module.css';

type StateManagedSelect = { value: string; label: string };
const options = [
  { value: '0', label: 'Tất cả' },
  { value: '1', label: 'Hoạt động' },
  { value: '2', label: 'Ngưng hoạt động' },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FFF2E7' : 'white',
    ':hover': {
      backgroundColor: '#FFF2E7',
      color: '#000',
    },
    textAlign: 'left',
    fontSize: '16px',
    padding: '8px 12px',
    color: '#000',
  }),
};

type ActiveStatusProps = {
  onChange: (newValue: string | null) => void;
};

const ActiveStatus: React.FC<ActiveStatusProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<StateManagedSelect | null>(null);

  const handleChange = (newValue: StateManagedSelect | null) => {
    setSelectedOption(newValue);
    onChange(newValue ? newValue.value : null);
  };

  return (
    <div className={styles.box}>
      <Select<StateManagedSelect>
        placeholder="Chọn tình trạng"
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
