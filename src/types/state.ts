import { ISection } from './section';

interface IPathRouterState {
  activePath: string;
}

interface ISectionsState {
  errorMessage: string;
  allSections: ISection[];
  isInputFieldOpen: boolean;
}

interface IState {
  pathRouter: IPathRouterState,
  sections: ISectionsState
}

export type { IState, IPathRouterState, ISectionsState };
