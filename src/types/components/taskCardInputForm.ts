interface ITaskCardInputFormProps {
  inputValue: string;
  isValid?: boolean;
  onInputValueChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  onClose?(): void;
  onSubmit(): void;
}

export type { ITaskCardInputFormProps };
