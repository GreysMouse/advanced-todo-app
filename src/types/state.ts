import { ISection } from './section';

interface IPathRouter {
  activePath: string;
}

interface ISections {
  allSections: ISection[];
}

interface IState {
  pathRouter: IPathRouter,
  sections: ISections
}

export type { IState, IPathRouter, ISections };
