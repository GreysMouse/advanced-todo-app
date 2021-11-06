import { INITIAL_SECTION_ID } from '../../config';

import { ISectionTabProps } from '../../types/components/sectionTab';

import './styles/section-tab.css';
import './styles/section-tab_active.css';
import './styles/section-tab__section-name.css';
import './styles/section-tab__section-name_active.css';
import './styles/section-tab__toolbar.css';
import './styles/section-tab__toolbar-button.css';
import './styles/section-tab__toolbar-button_type_edit.css';
import './styles/section-tab__toolbar-button_type_delete.css';

const SectionTab = ({ sectionData, isActive, onClick, onRename, onRemove }: ISectionTabProps): JSX.Element => {

  const handleEditButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    evt.stopPropagation();

    onRename();
  }

  const handleDeleteButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    evt.stopPropagation();

    onRemove();
  }

  return (
    <li
      className={ 'section-tab' + (isActive ? ' section-tab_active' : '') }
      onClick={ onClick }
    >
      <p className={ 'section-tab__section-name' + (isActive ? ' section-tab__section-name_active' : '') }>
        { sectionData.name }
      </p>
      {
        (sectionData._id !== INITIAL_SECTION_ID) && <div className='section-tab__toolbar'>
          <button
            className='section-tab__toolbar-button section-tab__toolbar-button_type_delete'
            type='button'
            onClick={ handleDeleteButtonClick }
          />
          <button
            className='section-tab__toolbar-button section-tab__toolbar-button_type_edit'
            type='button'
            onClick={ handleEditButtonClick }
          />
        </div>
      }    
    </li>
  );
}

export default SectionTab;
