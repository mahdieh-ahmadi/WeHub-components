import React, { ChangeEvent } from 'react';

export interface RadioButtonProps {
  label: string;
  active: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: boolean) => void;
}

const randomId = String(Math.random());

export const RadioButton = (props: RadioButtonProps) => {
  const { active, label, name, id, value, onChange } = props;

  const changeRadioActivation = (e: ChangeEvent<HTMLInputElement>) => {
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
        border: 1.5px solid #D0D6DC;
      }

      .WeHub-componentRadioBtn__input:checked {
        border: 5px solid #007A66;
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
          id={id || randomId}
          name={name}
          value={value}
          checked={active}
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
