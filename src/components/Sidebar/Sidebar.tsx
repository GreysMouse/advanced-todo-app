import React from 'react';

import { ISidebarProps } from '../../types/sidebar';

import './styles/sidebar.css';
import'./styles/sidebar__header.css';
import './styles/sidebar__caption.css';

const Sidebar = ({ caption, children }: React.PropsWithChildren<ISidebarProps>): JSX.Element => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__header'>
        <h2 className='sidebar__caption'>{ caption }</h2>
      </div>
      {
        children
      }
    </aside>
  );
}

export default Sidebar;
