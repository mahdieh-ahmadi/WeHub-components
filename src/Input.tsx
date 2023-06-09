import React, { CSSProperties } from 'react';
import './input.css';

export interface InputProps {
  onChange: (value: string) => void;
  value: string | number;
  label?: string;
  placeHolder?: string;
  style?: CSSProperties;
  className?: string;
}

export const Input = (props: InputProps) => {
  const { label, onChange, value, placeHolder, style, className } = props;

  return (
    <div style={style} className={`WeHub-componentInput ${className}`}>
      {label && <label className="WeHub-componentInput__label">{label}</label>}
      <input
        className="WeHub-componentInput__input"
        placeholder={placeHolder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
