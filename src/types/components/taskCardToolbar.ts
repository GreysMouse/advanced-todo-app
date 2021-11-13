import { IComponentWithExtraClass } from './componentWithExtraClass';

interface ITaskCardToolbarProps extends IComponentWithExtraClass {
  onDeleteButtonClick(): void;
}

export type { ITaskCardToolbarProps };
