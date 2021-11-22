import React from 'react';

interface IAuthFormInputFieldProps {
  labelText?: string;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  inputValue?: string;
  onInput?(evt: React.ChangeEvent<HTMLInputElement>): void;
}

export type { IAuthFormInputFieldProps };
