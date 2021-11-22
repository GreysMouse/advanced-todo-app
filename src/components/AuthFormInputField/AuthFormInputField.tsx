import { IAuthFormInputFieldProps } from '../../types/components/authFormInputField';

import './styles/auth-form-input-field.css';
import './styles/auth-form-input-field__label.css';
import './styles/auth-form-input-field__input.css';

const AuthFormInputField = ({
  labelText = '',
  inputAttributes,
  inputValue,
  onInput
}: IAuthFormInputFieldProps): JSX.Element => {
  return (
    <div className='auth-form-input-field'>
      <label className='auth-form-input-field__label'>
        { labelText }
        <input
          className='auth-form-input-field__input'
          { ...inputAttributes }
          required={ true }
          spellCheck={ false }
          value={ inputValue }
          onChange={ onInput }
        />
      </label>
    </div>
  );
}

export default AuthFormInputField;
