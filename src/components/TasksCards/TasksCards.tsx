import React from 'react';

import { EMPTY_TASKS_LIST_MESSAGE, TASKS_LIST_AUTOSCROLL_OPTIONS } from '../../config';

import usePrevious from '../../utils/customHooks/usePrevious';

import TaskCardWrapper from '../TaskCardWrapper/TaskCardWrapper';

import { ITasksCardsProps } from '../../types/components/tasksCards';

import './styles/tasks-cards.css';
import './styles/section__empty-list-message.css';

const TasksCards = ({ tasksIds }: ITasksCardsProps): JSX.Element => {

  const anchorElement = React.useRef<HTMLLIElement>(null);

  const prevTasksIds = usePrevious<string[]>(tasksIds);

  React.useEffect(() => {
    if (prevTasksIds && (prevTasksIds.length < tasksIds.length)) {
      anchorElement?.current?.scrollIntoView(TASKS_LIST_AUTOSCROLL_OPTIONS);
    }   
  }, [ prevTasksIds, tasksIds ]);

  return (
    tasksIds.length ?
      <ul className='tasks-cards'>
      {
        tasksIds.map(id => <TaskCardWrapper key={ id } taskId={ id } />)
      }
        <li className='tasks-cards__anchor' ref={ anchorElement } ></li>
      </ul>
    :
      <p className='section__empty-list-message'>{ EMPTY_TASKS_LIST_MESSAGE }</p>
  );
}

export default TasksCards;
