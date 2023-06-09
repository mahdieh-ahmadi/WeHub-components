import React from 'react';

export interface SwitchButtonProps {
  isRounded?: boolean;
  onChange: (active: boolean) => void;
  checked?: boolean;
}

export const SwitchButton = (props: SwitchButtonProps) => {
  const { isRounded, onChange, checked } = props;

  return (
    <>
      <style>
        {`
      .weHub_componentsSwitchBtn {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 18px;
      }
      
      .weHub_componentsSwitchBtn__input {
        opacity: 0;
        width: 0;
        height: 0;
        display: none;
      }
      
      .weHub_componentsSwitchBtn__input:checked + .weHub_componentsSwitchBtn__slider {
        background-color: #007a66;
      }
      
      .weHub_componentsSwitchBtn__slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 6px;
      }
      
      .weHub_componentsSwitchBtn__slider::before {
        position: absolute;
        content: '';
        height: 12px;
        width: 12px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.4s;
        border-radius: 4px;
      }
      
      .weHub_componentsSwitchBtn__input:checked
        + .weHub_componentsSwitchBtn__slider:before {
        -webkit-transform: translateX(11px);
        -ms-transform: translateX(11px);
        transform: translateX(11px);
      }
      
      .weHub_componentsSwitchBtn__slider--round {
        border-radius: 12px;
      }
      
      .weHub_componentsSwitchBtn__slider--round::before {
        border-radius: 12px;
      }
      
      `}
      </style>
      <label
        htmlFor="weHub_componentsSwitchBtn__input"
        className="weHub_componentsSwitchBtn"
      >
        <input
          id="weHub_componentsSwitchBtn__input"
          className="weHub_componentsSwitchBtn__input"
          type="checkbox"
          onChange={e => onChange(e.target.checked)}
          checked={checked}
        />
        <span
          className={`weHub_componentsSwitchBtn__slider
      ${isRounded && 'weHub_componentsSwitchBtn__slider--round'}`}
        ></span>
      </label>
    </>
  );
};

export default SwitchButton;
