import { IComponentWithExtraClass } from '../abstractComponents/componentWithExtraClass';

interface ITaskCardToolbarProps extends IComponentWithExtraClass {
  onRenameButtonClick(): void;
  onDeleteButtonClick(): void;
}

export type { ITaskCardToolbarProps };
