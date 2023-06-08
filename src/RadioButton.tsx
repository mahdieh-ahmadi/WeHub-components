import React, { ChangeEvent, useState } from 'react';

export interface RadioButtonProps {
  label: string;
  checked: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: boolean) => void;
}

const randomId = String(Math.random());

export const RadioButton = (props: RadioButtonProps) => {
  const { checked, label, name, id, value, onChange } = props;

  const [isCheck, setIsCheck] = useState(checked);

  const changeRadioActivation = (e: ChangeEvent<HTMLInputElement>) => {
    if (isCheck !== !!e.target?.checked) setIsCheck(!!e.target?.checked);
    if (onChange) onChange(!!e.target?.checked);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <input
        onChange={changeRadioActivation}
        style={{
          border: isCheck ? '5px solid #007A66' : '1.5px solid #D0D6DC',
          transition: 'all 0.2s',
          background: '#F6F7F9',
          margin: 0,
            appearance: 'none',
          width: '18px',
          height: '18px',
          borderRadius: '50px',
          cursor: 'pointer',
        }}
        type="radio"
        id={id || randomId}
        name={name}
        value={value}
        checked={checked}
      />
      <label
        htmlFor={id || randomId}
        style={{
          color: '#40454F',
          fontWeight: '600',
          fontSize: '16px',
          marginLeft: '8px',
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
