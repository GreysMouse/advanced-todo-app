interface ISectionLinkProps {
  sectionName: string;
  path: string;
  isActive: boolean;
  onClick(): void;
}

export type { ISectionLinkProps };
