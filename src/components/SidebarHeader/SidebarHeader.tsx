import React from 'react';

import { ISidebarHeaderProps } from '../../types/sidebarHeader';

import './styles/sidebar-header.css';
import './styles/sidebar-header__caption.css';

const SidebarHeader = ({ caption, children }: React.PropsWithChildren<ISidebarHeaderProps>): JSX.Element => {
  return (
    <div className='sidebar-header'>
      <h2 className='sidebar-header__caption'>{ caption }</h2>
      {
        children
      }
    </div>
  );
}

export default SidebarHeader;
