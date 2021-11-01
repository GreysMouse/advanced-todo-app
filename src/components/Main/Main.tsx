import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SectionsWrapper from '../SectionsWrapper/SectionsWrapper';
import SectionAddButtonWrapper from '../SectionAddButtonWrapper/SectionAddButtonWrapper';
import TasksList from '../TasksList/TasksList';

import './styles/main.css';

const Main = (): JSX.Element => {
  return (
    <main className='main'>
      <Sidebar>
        <SidebarHeader caption='SECTIONS' />
        <SectionsWrapper />
        <SectionAddButtonWrapper />
      </Sidebar>
      <TasksList />
    </main>
  );
}

export default Main;
