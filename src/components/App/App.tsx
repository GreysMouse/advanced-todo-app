import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { KEYS } from '../../config';

import { setSections } from '../../utils/slices/sectionsSlice';
import { resetEditingTask, resetSelectedTask, setTasks } from '../../utils/slices/tasksSlice';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';

import './styles/app.css';
import './styles/app__container.css';

const App = (): JSX.Element => {

  const appElement = React.useRef<HTMLDivElement>(null);

  const selectedTask = useSelector((state: IState) => {
    return state.tasks.selectedTask;
  });

  const editingTask = useSelector((state: IState) => {
    return state.tasks.editingTask;
  });

  const dispatch = useDispatch<TDispatch>();

  const handleAppClick = (evt: React.MouseEvent<HTMLDivElement>): void => {
    evt.stopPropagation();

    if (selectedTask) {
      editingTask ? dispatch(resetEditingTask()) : dispatch(resetSelectedTask());
    }
  }

  const handleAppKeyUp = (evt: React.KeyboardEvent<HTMLDivElement>): void => {
    if (evt.key === KEYS.ESC) {
      if (selectedTask) dispatch(resetSelectedTask());
    }
  }

  React.useEffect(() => {
    dispatch(setSections());
    dispatch(setTasks());

    appElement?.current?.focus();
  }, [ dispatch ]);


  // Return focus to App after inputs close //
  React.useEffect(() => {
    if (!editingTask) appElement?.current?.focus();
  }, [ editingTask ]);

  return (
    <div className='app'>
      <div
        className='app__container'
        ref={ appElement }
        tabIndex={ 1 }
        onClick={ handleAppClick }
        onKeyUp={ handleAppKeyUp }
      >
        <Header />
        <Main />
        <Footer />
      </div>      
    </div>
  );
};

export default App;
