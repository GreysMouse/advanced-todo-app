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
}

interface IPopupState {
  isOpen: boolean;
  type: string;
  message: string;
  actionPayload?: any;
}

interface IState {
  pathRouter: IPathRouterState,
  sections: ISectionsState,
  tasks: ITasksState,
  popup: IPopupState
}

export type { IState };
