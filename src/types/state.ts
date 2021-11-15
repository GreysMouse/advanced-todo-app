import { ISection } from './section';
import { ITask } from './task';

interface IPathRouterState {
  activePath: string;
}

interface ISectionsState {
  errorMessage: string;
  allSections: ISection[];
  isSectionAddFormOpen: boolean;
  renamingSection: string;
}

interface ITasksState {
  allTasks: ITask[];
  selectedTask: string | null;
  editingTask: string | null;
}

interface IState {
  pathRouter: IPathRouterState,
  sections: ISectionsState,
  tasks: ITasksState
}

export type { IState };
