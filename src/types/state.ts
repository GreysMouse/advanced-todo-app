import { ISection } from './section';

interface IPathRouterState {
  activePath: string;
}

interface ISectionsState {
  errorMessage: string;
  allSections: ISection[];
  isSectionAddFormOpen: boolean;
  sectionInRenameState: string;
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
  popup: IPopupState
}

export type { IState };
