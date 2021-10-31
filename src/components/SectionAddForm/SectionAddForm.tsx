import { ISectionAddFormProps } from '../../types/sectionAddForm';

import './styles/section-add-form.css';
import './styles/section-add-form__input.css';
import './styles/section-add-form__input_invalid.css';

const SectionAddForm = ({
  inputValue,
  isValid,
  onInputValueChange,
  onFocusLoss,
  onEscKeyUp,
  onSubmit
}: ISectionAddFormProps): JSX.Element => {
  return (
    <form
      className='section-add-form'
      onSubmit={ onSubmit }
    >
      <input
        className={ `section-add-form__input ${ isValid ? '' : 'section-add-form__input_invalid' }` }
        autoFocus={ true }
        value={ inputValue }
        onChange={ onInputValueChange }
        onBlur={ onFocusLoss }
        onKeyUp={ onEscKeyUp }
      />
    </form>
  );
}

export default SectionAddForm;
