import './styles/task-card.css';
import './styles/task-card__entry.css';

const TaskCard = (): JSX.Element => {
  return (
    <div className='task-card'>
      <p className='task-card__entry'>Some task</p>
    </div>
  );
}

export default TaskCard;
