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
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {label && (
        <label
          style={{
            marginBottom: '8px',
            fontWeight: '600',
            color: '#40454F',
            fontSize: '14px',
          }}
        >
          {label}
        </label>
      )}
      <input
        style={{
          border: '1px solid #D0D6DC',
          padding: '8px 6px',
          borderRadius: '8px',
          color: '#40454F',
          fontSize: '14px',
          width: '100%',
          outline: 'none'
        }}
        placeholder={placeHolder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
