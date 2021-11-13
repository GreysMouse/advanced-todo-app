import React from 'react';
import { useDispatch } from 'react-redux';

import { setSections } from '../../utils/slices/sectionsSlice';
import { resetSelectedTask, setTasks } from '../../utils/slices/tasksSlice';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import { TDispatch } from '../../store';

import './styles/app.css';
import './styles/app__container.css';

const App = (): JSX.Element => {

  const dispatch = useDispatch<TDispatch>();

  const handleEffectsReset = (): void => {
    dispatch(resetSelectedTask());
  }

  React.useEffect(() => {
    dispatch(setSections());
    dispatch(setTasks());
  }, [ dispatch ]);

  return (
    <div className='app'>
      <div className='app__container' onClick={ handleEffectsReset } >
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
