interface ISectionBody {
  name: string;
  path: string;
}

interface ISection extends ISectionBody {
  _id: string;
}

export type { ISectionBody, ISection };
