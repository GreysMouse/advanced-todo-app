import React from 'react';

import { ISidebarProps } from '../../types/components/sidebar';

import './styles/sidebar.css';

const Sidebar = ({ children }: React.PropsWithChildren<ISidebarProps>): JSX.Element => {
  return (
    <aside className='sidebar'>{ children }</aside>
  );
}

export default Sidebar;
