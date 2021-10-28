import { useSelector } from 'react-redux';

import SectionAddForm from '../SectionAddForm/SectionAddForm';

import { IState } from '../../types/state';

const SectionAddFormWrapper = (): JSX.Element => {
  const isInputFieldOpen = useSelector<IState, boolean>((state: IState) => state.sections.isInputFieldOpen);

  return (
    <>
      {
        isInputFieldOpen && <SectionAddForm />
      }      
    </>
  );
}

export default SectionAddFormWrapper;
