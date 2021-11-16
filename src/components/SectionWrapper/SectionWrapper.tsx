import { useSelector } from 'react-redux';

import Section from '../Section/Section';

import { IState } from '../../types/state';

const SectionWrapper= (): JSX.Element => {

  const activeSection = useSelector((state: IState) => {
    return state.sections.activeSection;
  });

  return <Section name={ activeSection } />
}

export default SectionWrapper;
