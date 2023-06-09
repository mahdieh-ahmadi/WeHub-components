import React from 'react';
import { Input } from './Input';

export interface InputArrayProps {
  inputs: Array<{
    value: string | number;
    label: string;
    key: string;
    placeHolder?: string;
  }>;
  onChange: (value: string, key: string) => void;
  hasDeleteOption?: boolean;
  DeleteFunc?: () => void;
  className?: string;
}

export const InputArray = (props: InputArrayProps) => {
  const { inputs, hasDeleteOption, onChange, DeleteFunc, className } = props;

  const deleteIcon = () => (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      style={{ marginBottom: '10px', cursor: 'pointer' }}
      onClick={DeleteFunc}
    >
      <path
        d="M10.2837 6.5L9.99519 14M6.00481 14L5.71635 6.5M14.023 3.82547C14.308 3.86851 14.592 3.91456 14.875 3.96358M14.023 3.82547L13.1332 15.3938C13.058 16.3707 12.2434 17.125 11.2637 17.125H4.73631C3.75655 17.125 2.94198 16.3707 2.86683 15.3938L1.97696 3.82547M14.023 3.82547C13.0677 3.6812 12.1013 3.57071 11.125 3.49527M1.125 3.96358C1.40798 3.91456 1.69198 3.86851 1.97696 3.82547M1.97696 3.82547C2.93231 3.6812 3.89874 3.57071 4.875 3.49527M11.125 3.49527V2.73182C11.125 1.74902 10.3661 0.928526 9.38382 0.897103C8.92435 0.882405 8.46304 0.875 8 0.875C7.53696 0.875 7.07565 0.882405 6.61618 0.897103C5.63388 0.928526 4.875 1.74902 4.875 2.73182V3.49527M11.125 3.49527C10.0938 3.41558 9.05164 3.375 8 3.375C6.94836 3.375 5.9062 3.41558 4.875 3.49527"
        stroke="#EB2A37"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const inputsComponent = () => {
    const componentList: JSX.Element[] = [];
    for (let i = 0; i < inputs.length; i++) {
      const item = inputs[i];
      componentList.push(
        <Input
          onChange={value => onChange(value, item.key)}
          value={item.value}
          key={item.key}
          label={item.label}
          placeHolder={item.placeHolder}
          style={{ marginRight: '12px', width: 'auto', flex: '1' }}
        />
      );
    }
    return componentList;
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'end', justifyContent: 'start' }}
      className={className}
    >
      {inputsComponent()}
      {hasDeleteOption && deleteIcon()}
    </div>
  );
};

export default InputArrayProps;
