import { INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../../config';

import SectionLinkWrapper from '../SectionLinkWrapper/SectionLinkWrapper';

import './styles/sections-links-list.css';

const SectionLinksList = (): JSX.Element => {
  return (
    <div className='sections-links-list'>
      <SectionLinkWrapper sectionName={ INITIAL_SECTION_NAME } path={ INITIAL_SECTION_PATH } />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      {/* <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/b' />
      <SectionLinkWrapper sectionName='Urgent' path='/c' /> */}
    </div>
  );
}

export default SectionLinksList;
