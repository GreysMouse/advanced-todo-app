import { ISectionAddFormProps } from '../../types/sectionAddForm';

import './styles/section-add-form.css';
import './styles/section-add-form__input.css';

const SectionAddForm = ({ onFocusLoss }: ISectionAddFormProps): JSX.Element => {
  return (
    <form className='section-add-form'>
      <input
        className='section-add-form__input'
        autoFocus={ true }
        onBlur={ onFocusLoss }
      />
    </form>
  );
}

export default SectionAddForm;
