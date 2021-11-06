import { useSelector } from 'react-redux';

import Section from '../Section/Section';

import { IState } from '../../types/state';

const SectionWrapper= (): JSX.Element => {

  const activePath = useSelector((state: IState) => {
    return state.pathRouter.activePath;
  });

  return <Section path={ activePath } />
}

export default SectionWrapper;
