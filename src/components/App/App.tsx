import React from 'react';
import { useDispatch } from 'react-redux';

import { setSections } from '../../utils/slices/sectionsSlice';
import { setTasks } from '../../utils/slices/tasksSlice';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWrapper from '../PopupWrapper/PopupWrapper';

import { TDispatch } from '../../store';

import './styles/app.css';
import './styles/app__container.css';

const App = (): JSX.Element => {

  const dispatch = useDispatch<TDispatch>();

  React.useEffect(() => {
    dispatch(setSections());
    dispatch(setTasks());
  }, [ dispatch ]);

  return (
    <div className='app'>
      <div className='app__container'>
        <Header />
        <Main />
        <Footer />
        <PopupWrapper />
      </div>
    </div>
  );
}

export default App;
