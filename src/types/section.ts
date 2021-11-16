interface ISectionBody {
  name: string;
}

interface ISection extends ISectionBody {
  _id: string;
}

export type { ISectionBody, ISection };
