import { ITask } from '../task';

interface ITaskCardProps {
  taskData: ITask;
  isSelected: boolean;
  isEditing: boolean;
  onClick(): void;
  onEdit(): void;
  onRemove(): void;
}

export type { ITaskCardProps };
