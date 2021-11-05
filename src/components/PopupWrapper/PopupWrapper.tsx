import { useSelector, useDispatch } from 'react-redux';

import { disablePopup } from '../../utils/slices/popupSlice';
import { removeSection } from '../../utils/slices/sectionsSlice';

import Popup from '../Popup/Popup';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';

const PopupWrapper= (): JSX.Element => {

  const { isOpen, type, message, actionPayload } = useSelector((state: IState) => {
    return state.popup;
  });

  const dispatch = useDispatch<TDispatch>();

  const handlePopupClose = (): void => {
    dispatch(disablePopup());
  }

  const handleSubmitClick = (): void => {
    switch(type) {
      case 'removeSection': {
        dispatch(removeSection(actionPayload));
        break;
      }
    }
    handlePopupClose();
  }

  return (
    <>
      {
        isOpen && <Popup
          message={ message }
          onSubmit={ handleSubmitClick }
          onCancel={ handlePopupClose }
        />
      }
    </>
  )
}

export default PopupWrapper;
