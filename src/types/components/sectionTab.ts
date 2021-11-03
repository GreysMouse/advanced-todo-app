import React from 'react';

import { ISection } from '../section';

interface ISectionTabProps {
  sectionData: ISection;
  isActive: boolean;
  onClick(): void;
  onRemove(evt: React.MouseEvent<HTMLButtonElement>): void;
}

export type { ISectionTabProps };
