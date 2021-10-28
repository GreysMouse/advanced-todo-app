import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SectionLinksListWrapper from '../SectionLinksListWrapper/SectionLinksListWrapper';
import SectionAddButtonWrapper from '../SectionAddButtonWrapper/SectionAddButtonWrapper';
import TasksList from '../TasksList/TasksList';

import './styles/main.css';

const Main = (): JSX.Element => {
  return (
    <main className='main'>
      <Sidebar>
        <SidebarHeader caption='SECTIONS' />
        <SectionLinksListWrapper />
        <SectionAddButtonWrapper />
      </Sidebar>
      <TasksList />
    </main>
  );
}

export default Main;
