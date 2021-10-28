import { useDispatch } from 'react-redux';

import { openInputField } from '../../utils/sectionsSlice';

import SectionAddButton from '../SectionAddButton/SectionAddButton';

import { TDispatch } from '../../store';

const SectionAddButtonWrapper = (): JSX.Element => {

  const dispatch = useDispatch<TDispatch>();

  const handleClick = (): void => {
    dispatch(openInputField());
  }

  return <SectionAddButton onClick={ handleClick } />;
}

export default SectionAddButtonWrapper;
