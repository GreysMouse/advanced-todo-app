import './styles/section-toolbar.css';
import './styles/section-toolbar__tool-button.css';
import './styles/section-toolbar__tool-button_type_add.css';

const SectionToolbar= (): JSX.Element => {
  return (
    <div className='section-toolbar'>
      <button className='section-toolbar__tool-button section-toolbar__tool-button_type_add'>New TODO</button>
      {/* <button className='section-toolbar__tool-button'>Edit</button>
      <button className='section-toolbar__tool-button'>Remove TODO</button> */}
    </div>
  );
}

export default SectionToolbar;
// cc0044
