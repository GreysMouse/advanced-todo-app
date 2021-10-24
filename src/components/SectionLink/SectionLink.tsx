import { NavLink } from 'react-router-dom';

import './styles/section-link.css';
import './styles/section-link_active.css';
import './styles/section-link__section-name.css';

interface ISectionLinkProps {
  sectionName: string;
  path: string;
  isActive: boolean;
}

const SectionLink = ({ sectionName, path, isActive }: ISectionLinkProps): JSX.Element => {
  return (
    <NavLink className='section-link' activeClassName='section-link_active' exact to={ path }>
      <p className='section-link__section-name'>{ isActive ? sectionName : 'ss' }</p>
    </NavLink>
  );
}

export default SectionLink;
