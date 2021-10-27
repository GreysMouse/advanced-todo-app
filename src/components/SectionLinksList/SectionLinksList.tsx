import SectionLinkWrapper from '../SectionLinkWrapper/SectionLinkWrapper';

import { ISectionLinksListProps } from '../../types/sectionLinksList';

import './styles/sections-links-list.css';

const SectionLinksList = ({ sections }: ISectionLinksListProps): JSX.Element => {
  return (
    <div className='sections-links-list'>
    {
      sections.map((section) => {
        return (
          <SectionLinkWrapper key={ section._id } sectionName={ section.name } path={ section.path } />
        )
      })
    }
    </div>
  );
}

export default SectionLinksList;
