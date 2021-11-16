export const CURRENT_YEAR = new Date().getFullYear();

export const INITIAL_SECTION_ID = '0';
export const INITIAL_SECTION_NAME = 'default';
export const INITIAL_SECTION_PATH = 'section-default';

export const SECTION_NAME_PREFIX = 'section-';

export const NOTE_MIN_LENGTH = 1;
export const NOTE_MAX_LENGTH = 96;

export const TASK_INPUT_FIELD_PLACEHOLDER = 'Type TODO message here';
export const NOTE_TEXTAREA_MAX_ROWS = 10;

export const TASK_CARD_SELECTION_DELAY = 1000;

export const EMPTY_TASKS_LIST_MESSAGE = 'There are no TODOs here yet';

export const TASK_ADD_BUTTON_TEXT = 'New TODO';

export enum DEVICE_TYPES {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  LAPTOP = 'laptop'
}

export enum POPUP_MESSAGES {
  REMOVE_SECTION = 'Are you sure you want to delete this section and all it`s TODOs?',
  REMOVE_TASK = 'Are you sure you want to delete this task?'
}

export enum KEYS {
  ESC = 'Escape',
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight'
}

export const BASE_URL = 'http://localhost:4000';
