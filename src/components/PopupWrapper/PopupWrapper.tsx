import Popup from '../Popup/Popup';

import { IPopupWrapperProps } from '../../types/components/popupWrapper';

const PopupWrapper= ({ message, onSubmit, onCancel }: IPopupWrapperProps): JSX.Element => {

  const handleSubmitClick = (): void => {
    onSubmit();
    onCancel();
  }

  return (
    <Popup
      message={ message }
      onSubmit={ handleSubmitClick }
      onCancel={ onCancel }
    />
  )
}

export default PopupWrapper;
