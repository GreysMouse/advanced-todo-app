import { Link } from 'react-router-dom';

import { INITIAL_SECTION_ID } from '../../config';

import { ISectionTabProps } from '../../types/components/sectionTab';

import './styles/section-tab.css';
import './styles/section-tab__link.css';
import './styles/section-tab__link_active.css';
import './styles/section-tab__section-name.css';
import './styles/section-tab__toolbar.css';
import './styles/section-tab__toolbar-button.css';
import './styles/section-tab__toolbar-button_type_edit.css';
import './styles/section-tab__toolbar-button_type_delete.css';

const SectionTab = ({ sectionData, isActive, onClick, onRemove }: ISectionTabProps): JSX.Element => {
  return (
    <li className='section-tab'>
      <Link
        className={ 'section-tab__link' + (isActive ? ' section-tab__link_active' : '') }
        to={ sectionData.path }
        onClick={ onClick }
      >
        <p className='section-tab__section-name'>{ sectionData.name }</p>
        {
          (sectionData._id !== INITIAL_SECTION_ID) && <div className='section-tab__toolbar'>
            <button
              className='section-tab__toolbar-button section-tab__toolbar-button_type_delete'
              type='button'
              onClick={ onRemove }
            />
            <button
              className='section-tab__toolbar-button section-tab__toolbar-button_type_edit'
              type='button'
            />
          </div>
        }
      </Link>      
    </li>
  );
}

export default SectionTab;
