import React, { CSSProperties } from 'react';

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
    <>
      <style>
        {`
      .WeHub-componentInput {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      
      .WeHub-componentInput__label {
        margin-bottom: 8px;
        font-weight: 600;
        color: #40454f;
        font-size: 14px;
      }
      
      .WeHub-componentInput__input {
        border: 1px solid #d0d6dc;
        padding: 8px 6px;
        border-radius: 8px;
        color: #40454f;
        font-size: 14px;
        width: 100%;
        outline: none;
        box-sizing: border-box;
      }
      
      `}
      </style>
      <div style={style} className={`WeHub-componentInput ${className}`}>
        {label && (
          <label className="WeHub-componentInput__label">{label}</label>
        )}
        <input
          className="WeHub-componentInput__input"
          placeholder={placeHolder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </>
  );
};
