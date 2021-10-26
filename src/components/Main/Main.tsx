import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SectionLinksList from '../SectionLinksList/SectionLinksList';
import SectionAddButton from '../SectionAddButton/SectionAddButton';
import TasksList from '../TasksList/TasksList';

import './styles/main.css';

const Main = (): JSX.Element => {
  return (
    <main className='main'>
      <Sidebar>
        <SidebarHeader caption='SECTIONS' />
        <SectionLinksList />
        <SectionAddButton />
      </Sidebar>
      <TasksList />
    </main>
  );
}

export default Main;
