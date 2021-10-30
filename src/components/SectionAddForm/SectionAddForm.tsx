import { ISectionAddFormProps } from '../../types/sectionAddForm';

import './styles/section-add-form.css';
import './styles/section-add-form__input.css';

const SectionAddForm = ({
  inputValue,
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
        className='section-add-form__input'
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
