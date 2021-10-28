import { useSelector, useDispatch } from 'react-redux';

import { closeInputField } from '../../utils/sectionsSlice';

import SectionAddForm from '../SectionAddForm/SectionAddForm';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';

const SectionAddFormWrapper = (): JSX.Element => {
  const isInputFieldOpen = useSelector<IState, boolean>((state: IState) => state.sections.isInputFieldOpen);

  const dispatch = useDispatch<TDispatch>();

  const handleFocusLoss = (): void => {
    dispatch(closeInputField());
  }

  return (
    <>
      {
        isInputFieldOpen && <SectionAddForm onFocusLoss={ handleFocusLoss } />
      }      
    </>
  );
}

export default SectionAddFormWrapper;
