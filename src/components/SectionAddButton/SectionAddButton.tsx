import { ISectionAddButtonProps } from '../../types/components/sectionAddButton';

import './styles/section-add-button.css';

const SectionAddButton = ({ onClick }: ISectionAddButtonProps): JSX.Element => {
  return (
    <button
      className='section-add-button'
      onClick={ onClick }
    >
      + Add new section
    </button>
  );
}

export default SectionAddButton;
