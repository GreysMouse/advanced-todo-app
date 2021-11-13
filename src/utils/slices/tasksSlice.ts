import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import tasksAPI from '../APIs/tasksAPI';

import { ITask, ITaskBody } from '../../types/task';

const initialState = {
  allTasks: [] as ITask[],
  selectedTask: '',
  taskInRenameState: null
}

const setTasks = createAsyncThunk('tasks/setTasks', () => {
  return tasksAPI.getTasks().then(tasksList => tasksList);
});

const addTask = createAsyncThunk('tasks/addTask', (task: ITaskBody) => {
  return tasksAPI.createTask(task).then(task => task);
});

const renameTask = createAsyncThunk('tasks/renameTask', (task: ITask) => {
  return tasksAPI.updateTask(task).then(task => task);
});

const removeTask = createAsyncThunk('tasks/removeTask', (taskId: string) => {
  return tasksAPI.deleteTask(taskId).then(task => task);
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    resetSelectedTask: (state) => {
      state.selectedTask = '';
    },
    defineRenamingTask: (state, action) => {
      state.taskInRenameState = action.payload;
    },
    resetRenamingTask: (state) => {
      state.taskInRenameState = null;
    }
  },
  extraReducers(builder) {
    builder
    // GET
    .addCase(setTasks.fulfilled, (state, action) => {
      state.allTasks = action.payload;
    })
    .addCase(setTasks.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // POST
    .addCase(addTask.fulfilled, (state, action) => {
      state.allTasks.push(action.payload);
    })
    .addCase(addTask.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // PATCH
    .addCase(renameTask.fulfilled, (state, action) => { 
      state.allTasks = state.allTasks.map(task => {
        return task._id === action.payload._id ? action.payload : task;
      });
    })
    .addCase(renameTask.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // DELETE
    .addCase(removeTask.fulfilled, (state, action) => {
      state.allTasks = state.allTasks.filter(task => task._id !== action.payload._id);
    })
    .addCase(removeTask.rejected, (state, action) => {
      console.log(action.error.message);
    })
  }
});

const {
  setSelectedTask,
  resetSelectedTask,
  defineRenamingTask,
  resetRenamingTask
} = tasksSlice.actions;

const tasksReducer = tasksSlice.reducer;

export {
  setSelectedTask,
  resetSelectedTask,
  defineRenamingTask,
  resetRenamingTask,
  setTasks,
  addTask,
  renameTask,
  removeTask,
  tasksReducer
};
