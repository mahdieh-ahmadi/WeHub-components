import React from 'react';
import './SwitchButton.css';

export interface SwitchButtonProps {
  isRounded?: boolean;
  onChange: (active: boolean) => void;
  checked?: boolean;
}

export const SwitchButton = (props: SwitchButtonProps) => {
  const { isRounded, onChange, checked } = props;

  return (
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
  );
};

export default SwitchButton;
