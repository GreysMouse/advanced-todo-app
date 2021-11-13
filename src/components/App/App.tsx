import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSections } from '../../utils/slices/sectionsSlice';
import { resetSelectedTask, setTasks } from '../../utils/slices/tasksSlice';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import { TDispatch } from '../../store';

import './styles/app.css';
import './styles/app__container.css';
import { IState } from '../../types/state';

const App = (): JSX.Element => {

  // const taskInRenamingState = useSelector((state: IState) => {
  //   return state.tasks.taskInRenameState;
  // });

  const dispatch = useDispatch<TDispatch>();

  const resetEffects = (evt: React.MouseEvent<HTMLDivElement>): void => {
    evt.stopPropagation();

    // dispatch(resetSelectedTask());
  }

  React.useEffect(() => {
    dispatch(setSections());
    dispatch(setTasks());
  }, [ dispatch ]);

  return (
    <div className='app'>
      <div className='app__container' onClick={ resetEffects }>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
