import { ISection } from '../section';

interface ISectionTabProps {
  sectionData: ISection;
  isActive: boolean;
  onClick(): void;
}

export type { ISectionTabProps };
