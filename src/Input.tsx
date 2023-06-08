import React from 'react';

export interface InputProps {
  onChange: (value: string) => void;
  value: string | number;
  label?: string;
  placeHolder?: string;
}

export const Input = (props: InputProps) => {
  const { label, onChange, value, placeHolder } = props;

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        placeholder={placeHolder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
