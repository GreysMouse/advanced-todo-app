import SectionLinkWrapper from '../SectionLinkWrapper/SectionLinkWrapper';
import SectionAddFormWrapper from '../SectionAddFormWrapper/SectionAddFormWrapper';

import { ISectionLinksListProps } from '../../types/sectionLinksList';

import './styles/sections.css';
import './styles/sections__links-list.css';

const Sections = ({ sections }: ISectionLinksListProps): JSX.Element => {
  return (
    <div className='sections'>
      <ul className='sections__links-list'>
      {
        sections.map((section) => {
          return (
            <SectionLinkWrapper key={ section._id } sectionName={ section.name } path={ section.path } />
          )
        })
      }
      </ul>
    <SectionAddFormWrapper />
    </div>  
  );
}

export default Sections;
