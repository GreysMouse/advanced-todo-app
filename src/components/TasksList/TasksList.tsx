import TaskCard from '../TaskCard/TaskCard';

import './styles/tasks-list.css';

const TasksList = (): JSX.Element => {
  return (
    <div className='tasks-list'>
      <TaskCard />
    </div>
  );
}

export default TasksList;
