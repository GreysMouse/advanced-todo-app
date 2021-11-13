import { ISection } from './section';
import { ITask } from './task';

interface IPathRouterState {
  activePath: string;
}

interface ISectionsState {
  errorMessage: string;
  allSections: ISection[];
  isSectionAddFormOpen: boolean;
  sectionInRenameState: string;
}

interface ITasksState {
  allTasks: ITask[];
  selectedTask: string;
}

interface IPopupState {
  type: string;
}

interface IState {
  pathRouter: IPathRouterState,
  sections: ISectionsState,
  tasks: ITasksState,
  popup: IPopupState
}

export type { IState };
