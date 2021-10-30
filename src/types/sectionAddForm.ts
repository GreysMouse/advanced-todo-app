import React from 'react';

interface ISectionAddFormProps {
  inputValue: string;
  onInputValueChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  onFocusLoss(): void;
  onEscKeyUp(evt: React.KeyboardEvent): void;
  onSubmit(evt: React.FormEvent): void;
}

export type { ISectionAddFormProps };
  
