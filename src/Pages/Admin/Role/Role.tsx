import React, { useState } from 'react';
import Select, { ActionMeta, SingleValue, Props } from 'react-select';
import styles from './Role.module.css';

type StateManagedSelect = { value: string; label: string };
const options = [
  { value: '1', label: 'Kế toán' },
  { value: '2', label: 'Quản lý' },
  { value: '3', label: 'Admin' },
  { value: '4', label: 'Bác sĩ' },
  { value: '5', label: 'SupperAdmin' },
  { value: '6', label: 'Lễ Tân' },
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

type RoleProps = {
  onChange: (newValue: string | null) => void;
};

const Role: React.FC<RoleProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<StateManagedSelect | null>(null);

  const handleChange = (newValue: StateManagedSelect | null) => {
    setSelectedOption(newValue);
    onChange(newValue ? newValue.value : null);
  };

  return (
      <div className={styles.box}>
          <h2 className={styles.title}>Tên vai trò</h2>
          <Select<StateManagedSelect>
            placeholder="Chọn vai trò"
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
