import { useDispatch, useSelector } from 'react-redux';

import { disablePopup } from '../../utils/slices/popupSlice';

import Popup from '../Popup/Popup';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';
import { IPopupWrapperProps } from '../../types/components/popupWrapper';

const PopupWrapper= ({ type = '', message, onSubmit }: IPopupWrapperProps): JSX.Element => {

  const isOpen = useSelector((state: IState) => {
    return state.popup.type === type;
  });

  const dispatch = useDispatch<TDispatch>();

  const handlePopupClose = (): void => {
    dispatch(disablePopup());
  }

  const handleSubmitClick = (): void => {
    onSubmit();
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
