import SectionLinkWrapper from '../SectionLinkWrapper/SectionLinkWrapper';
import SectionAddFormWrapper from '../SectionAddFormWrapper/SectionAddFormWrapper';

import { ISectionsProps } from '../../types/components/sections';

import './styles/sections.css';
import './styles/sections__links-list.css';

const Sections = ({ sectionsIds }: ISectionsProps): JSX.Element => {
  return (
    <div className='sections'>
      <ul className='sections__links-list'>
      {
        sectionsIds.map((id) => {
          return (
            <SectionLinkWrapper key={ id } sectionId={ id } />
          )
        })
      }
      </ul>
    <SectionAddFormWrapper />
    </div>  
  );
}

export default Sections;
