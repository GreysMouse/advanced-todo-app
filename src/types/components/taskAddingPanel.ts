interface ITaskAddingPanelProps {
  inputValue: string;
  onInputValueChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(): void;
}

export type { ITaskAddingPanelProps };
