import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SectionTabsWrapper from '../SectionTabsWrapper/SectionTabsWrapper';
import SectionAddButtonWrapper from '../SectionAddButtonWrapper/SectionAddButtonWrapper';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

import './styles/main.css';

const Main = (): JSX.Element => {
  return (
    <main className='main'>
      <Sidebar>
        <SidebarHeader caption='sections' />
        <SectionTabsWrapper />
        <SectionAddButtonWrapper />
      </Sidebar>
      <SectionWrapper />
    </main>
  );
}

export default Main;
