import React from 'react';

interface IAuthFormCheckboxProps {
  labelText?: string;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  isChecked?: boolean;
  onCheck?(): void;
}

export type { IAuthFormCheckboxProps };
