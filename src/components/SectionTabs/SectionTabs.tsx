import SectionTabWrapper from '../SectionTabWrapper/SectionTabWrapper';
import SectionAddFormWrapper from '../SectionAddFormWrapper/SectionAddFormWrapper';

import { ISectionTabsProps } from '../../types/components/sectionTabs';

import './styles/section-tabs.css';
import './styles/section-tabs__tabs-list.css';

const SectionTabs = ({ sectionsIds }: ISectionTabsProps): JSX.Element => {
  return (
    <div className='section-tabs'>
      <ul className='section-tabs__tabs-list'>
      {
        sectionsIds.map((id) => <SectionTabWrapper key={ id } sectionId={ id } />)
      }
      </ul>
    <SectionAddFormWrapper />
    </div>  
  );
}

export default SectionTabs;
