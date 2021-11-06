interface ITaskBody {
  section: string;
  entry: string;
  creationDate: string;
  creationTime: string;
}

interface ITask extends ITaskBody {
  _id: string;
}

export type { ITaskBody, ITask };
