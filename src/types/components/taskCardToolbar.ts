import { IComponentWithExtraClass } from '../abstractComponents/componentWithExtraClass';

interface ITaskCardToolbarProps extends IComponentWithExtraClass {
  onEditButtonClick(): void;
  onDeleteButtonClick(): void;
}

export type { ITaskCardToolbarProps };
