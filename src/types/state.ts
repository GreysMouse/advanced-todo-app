interface IPathRouter {
  activePath: string;
}

interface IState {
  pathRouter: IPathRouter
}

export type { IState, IPathRouter };
