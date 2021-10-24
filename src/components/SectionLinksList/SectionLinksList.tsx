import SectionLinkWrapper from '../SectionLinkWrapper/SectionLinkWrapper';

const SectionLinksList = (): JSX.Element => {
  return (
    <div className='sections-list'>
      <SectionLinkWrapper sectionName='hOMe' path='/c' />
      <SectionLinkWrapper sectionName='Work' path='/a' />
      <SectionLinkWrapper sectionName='Urgent' path='/b' />
    </div>
  );
}

export default SectionLinksList;
