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
    if (isCheck !== !!e.target.checked) setIsCheck(!!e.target.checked);
    if (onChange) onChange(!!e.target.checked);
  };

  return (
    <>
      <style>
        {`
      .WeHub-componentRadioBtn {
        display: flex;
        align-items: center;
        justify-content: start;
      }
      
      .WeHub-componentRadioBtn__input {
        transition: all 0.2s;
        background: #f6f7f9;
        margin: 0;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50px;
        cursor: pointer;
      }
      
      .WeHub-componentRadioBtn__label {
        color: #40454f;
        font-weight: 600;
        font-size: 16px;
        margin-left: 8px;
      }
      
      `}
      </style>
      <div className="WeHub-componentRadioBtn">
        <input
          onChange={changeRadioActivation}
          className="WeHub-componentRadioBtn__input"
          type="radio"
          style={{
            border: isCheck ? '5px solid #007A66' : '1.5px solid #D0D6DC',
          }}
          id={id || randomId}
          name={name}
          value={value}
          checked={checked}
        />
        <label
          htmlFor={id || randomId}
          className="WeHub-componentRadioBtn__label"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioButton;
