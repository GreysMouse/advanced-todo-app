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

interface IState {
  pathRouter: IPathRouterState,
  sections: ISectionsState
}

export type { IState, IPathRouterState, ISectionsState };
