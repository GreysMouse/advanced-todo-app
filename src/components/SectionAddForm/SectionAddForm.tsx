import './styles/section-add-form.css';
import './styles/section-add-form__input.css';

const SectionAddForm = (): JSX.Element => {
  return (
    <form className='section-add-form'>
      <input className='section-add-form__input' autoFocus={ true } />
    </form>
  );
}

export default SectionAddForm;
