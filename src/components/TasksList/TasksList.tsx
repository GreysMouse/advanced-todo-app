import TaskCard from '../TaskCard/TaskCard';

import './styles/tasks-list.css';

const TasksList = (): JSX.Element => {
  return (
    <div className='tasks-list'>
      <div className='tasks-list__header'>
        
      </div>
      <TaskCard />
    </div>
  );
}

export default TasksList;
