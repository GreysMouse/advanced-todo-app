import { ITask } from '../task';

interface ITaskCardProps {
  taskData: ITask;
  isSelected: boolean;
  onClick(): void;
  onRemove(): void;
}

export type { ITaskCardProps };
