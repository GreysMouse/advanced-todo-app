import { Link } from 'react-router-dom';

import { ISectionLinkProps } from '../../types/sectionLink';
import SectionLinkToolbar from '../SectionLinkToolbar/SectionLinkToolbar';

import './styles/section-link.css';
import './styles/section-link__link.css';
import './styles/section-link__link_active.css';

const SectionLink = ({ sectionName, path, isActive, onClick }: ISectionLinkProps): JSX.Element => {
  return (
    <li className='section-link'>
      <Link
        className={ 'section-link__link' + (isActive ? ' section-link__link_active': '') }
        to={ path }
        onClick={ onClick }
      >
        { sectionName }
      </Link>
      <SectionLinkToolbar />
    </li>
  );
}

export default SectionLink;
