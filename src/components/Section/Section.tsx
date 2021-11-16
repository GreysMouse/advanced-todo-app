import { SECTION_NAME_PREFIX } from '../../config';

import TasksCardsWrapper from '../TasksCardsWrapper/TasksCardsWrapper';
import TaskAddingPanelWrapper from '../TaskAddingPanelWrapper/TaskAddingPanelWrapper';

import { ISectionProps } from '../../types/components/section';

import './styles/section.css';
import './styles/section__header.css';
import './styles/section__header-caption.css';

const Section = ({ name }: ISectionProps): JSX.Element => {
  
  const sectionName = name.replace(SECTION_NAME_PREFIX, '');

  return (
    <section className='section'>
      <div className='section__header'>
        <h2 className='section__header-caption'>{ `${ sectionName } todos` }</h2>
      </div>
      <TasksCardsWrapper sectionName={ name } />
      <TaskAddingPanelWrapper />
    </section>
  );
}

export default Section;
