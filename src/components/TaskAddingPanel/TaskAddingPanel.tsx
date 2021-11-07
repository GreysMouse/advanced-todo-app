import { TASK_INPUT_FIELD_PLACEHOLDER, TASK_ADD_BUTTON_TEXT } from '../../config';

import './styles/task-adding-panel.css';
import './styles/task-adding-panel__form.css';
import './styles/task-adding-panel__input-field.css';
import './styles/task-adding-panel__submit-button.css';

const TaskAddingPanel = (): JSX.Element => {
  return (
    <div className='task-adding-panel'>
      <form className='task-adding-panel__form'>
        <input
          className='task-adding-panel__input-field'
          autoFocus={ false }
          placeholder={ TASK_INPUT_FIELD_PLACEHOLDER }
        />
        <button className='task-adding-panel__submit-button'>{ TASK_ADD_BUTTON_TEXT }</button>
      </form>
    </div>
  );
}

export default TaskAddingPanel;
