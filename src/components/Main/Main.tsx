import Sidebar from '../Sidebar/Sidebar';
import SectionLinksList from '../SectionLinksList/SectionLinksList';
import TasksList from '../TasksList/TasksList';

import './styles/main.css';

const Main = (): JSX.Element => {
  return (
    <main className='main'>
      <Sidebar caption='SECTIONS'>
        <SectionLinksList />
      </Sidebar>
      <TasksList />
    </main>
  );
}

export default Main;
