import { ISection } from '../section';

interface ISectionLinkProps {
  sectionData: ISection;
  isActive: boolean;
  onClick(): void;
}

export type { ISectionLinkProps };
