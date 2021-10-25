import { Link } from 'react-router-dom';

import { ISectionLinkProps } from '../../types/sectionLink';

import './styles/section-link.css';
import './styles/section-link_active.css';
import './styles/section-link__section-name.css';
import './styles/section-link__section-name_active.css';

const SectionLink = ({ sectionName, path, isActive, onClick }: ISectionLinkProps): JSX.Element => {
  return (
    <Link
      className={ 'section-link' + (isActive ? ' section-link_active': '') }
      to={ path }
      onClick={ onClick }
    >
      <p className={ 'section-link__section-name' + (isActive ? ' section-link__section-name_active' : '' ) }>
        { sectionName }
      </p>
    </Link>
  );
}

export default SectionLink;
