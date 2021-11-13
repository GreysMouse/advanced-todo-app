import { ITask } from '../task';

interface ITaskCardProps {
  taskData: ITask;
  isSelected: boolean;
  isInRenamingState: boolean;
  onClick(): void;
  onRename(): void;
  onRemove(): void;
}

export type { ITaskCardProps };
