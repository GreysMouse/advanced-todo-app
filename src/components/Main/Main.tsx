import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PAGE_ROUTES } from '../../config';

import RegisterPageWrapper from '../RegisterPageWrapper/RegisterPageWrapper';

import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SectionTabsWrapper from '../SectionTabsWrapper/SectionTabsWrapper';
import SectionAddButtonWrapper from '../SectionAddButtonWrapper/SectionAddButtonWrapper';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

import './styles/main.css';


const Main = (): JSX.Element => {
  return (
    <main className='main'>
      <Switch>
        <Route path={ PAGE_ROUTES.SIGNUP }>
          <RegisterPageWrapper />
        </Route>
        <Route path='/signin'>

        </Route>
        <Route exact path='/'>
          <Sidebar>
            <SidebarHeader caption='sections' />
            <SectionTabsWrapper />
            <SectionAddButtonWrapper />
          </Sidebar>
          <SectionWrapper />
        </Route>
      </Switch>
    </main>
  );
}

export default React.memo(Main);
