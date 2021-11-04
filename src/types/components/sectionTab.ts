import { ISection } from '../section';

interface ISectionTabProps {
  sectionData: ISection;
  isActive: boolean;
  onClick(): void;
  onRename(): void;
  onRemove(): void;
}

export type { ISectionTabProps };
