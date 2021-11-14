import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSections } from '../../utils/slices/sectionsSlice';
import { resetRenamingTask, resetSelectedTask, setTasks } from '../../utils/slices/tasksSlice';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import { TDispatch } from '../../store';

import './styles/app.css';
import './styles/app__container.css';
import { IState } from '../../types/state';


const App = (): JSX.Element => {

  const selectedTask = useSelector((state: IState) => {
    return state.tasks.selectedTask;
  });

  const taskInRenameState = useSelector((state: IState) => {
    return state.tasks.taskInRenameState;
  });

  const dispatch = useDispatch<TDispatch>();

  const handleAppClick = (evt: React.MouseEvent<HTMLDivElement>): void => {
    evt.stopPropagation();

    if (selectedTask) {
      taskInRenameState ? dispatch(resetRenamingTask()) : dispatch(resetSelectedTask());
    }
  }

  React.useEffect(() => {
    dispatch(setSections());
    dispatch(setTasks());
  }, [ dispatch ]);

  return (
    <div className='app'>
      <div className='app__container' onClick={ handleAppClick }>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
