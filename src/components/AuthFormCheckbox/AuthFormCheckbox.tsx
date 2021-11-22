import { IAuthFormCheckboxProps } from '../../types/components/authFormCheckbox';

import './styles/auth-form-checkbox.css';
import './styles/auth-form-checkbox__label.css';
import './styles/auth-form-checkbox__input.css';

const AuthFormCheckbox = ({
  labelText = '',
  inputAttributes = {},
  isChecked = false,
  onCheck
}: IAuthFormCheckboxProps): JSX.Element => {

  const handleLabelClick = (evt: React.MouseEvent<HTMLLabelElement>): void => {
    if (evt.detail > 1) evt.preventDefault();
  }

  return (
    <div className='auth-form-checkbox'>
      <label
        className='auth-form-checkbox__label'
        onMouseDown={ handleLabelClick }
      >
        { labelText }
        <input
          className='auth-form-checkbox__input'
          { ...inputAttributes }
          type='checkbox'
          checked={ isChecked }
          onChange={ onCheck }
        />
      </label>
    </div>
  );
}

export default AuthFormCheckbox;
