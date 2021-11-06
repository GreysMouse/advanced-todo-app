import TasksCardsWrapper from '../TasksCardsWrapper/TasksCardsWrapper';

import { ISectionProps } from '../../types/components/section';

import './styles/section.css';
import './styles/section__header.css';
import './styles/section__header-caption.css';

const Section = ({ path }: ISectionProps): JSX.Element => {
  
  const sectionName = path.replace(/section-/, '');

  return (
    <section className='section'>
      <div className='section__header'>
        <h2 className='section__header-caption'>{ `${ sectionName } todos` }</h2>
      </div>
      <TasksCardsWrapper path={ path } />
    </section>
  );
}

export default Section;
