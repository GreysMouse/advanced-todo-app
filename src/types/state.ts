import { ISection } from './section';
import { ITask } from './task';

interface ISectionsState {
  errorMessage: string;
  allSections: ISection[];
  isAddFormOpen: boolean;
  activeSection: string;
  renamingSection: string;
}

interface ITasksState {
  allTasks: ITask[];
  selectedTask: string | null;
  editingTask: string | null;
}

interface IState {
  sections: ISectionsState,
  tasks: ITasksState
}

export type { IState };
