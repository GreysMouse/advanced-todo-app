import { shallowEqual, useSelector } from 'react-redux';

import Sections from '../Sections/Sections';

import { IState } from '../../types/state';

const SectionsWrapper= (): JSX.Element => {

  const sectionsIds = useSelector((state: IState) => {
    return state.sections.allSections.map((section) => section._id);
  }, shallowEqual);

  return <Sections sectionsIds={ sectionsIds } />;
}

export default SectionsWrapper;
