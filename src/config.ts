export const CURRENT_YEAR = new Date().getFullYear();

export const INITIAL_SECTION_ID = '0';
export const INITIAL_SECTION_NAME = 'section-default';

export const SECTION_NAME_PREFIX = 'section-';

export const NOTE_MIN_LENGTH = 1;
export const NOTE_MAX_LENGTH = 96;

export const USER_NAME_MIN_LENGTH = 2;
export const USER_NAME_MAX_LENGTH = 30;
export const USER_NAME_PATTERN = /^[a-zA-Zа-яА-Я-_0-9]+$/;

export const USER_EMAIL_PATTERN = /^[a-zA-Z0-9.]+@[a-z]+(.[a-z]{2,})+$/;

export const USER_PASSWORD_MIN_LENGTH = 8;
export const USER_PASSWORD_PATTERN = /^\S+$/;

export const TASK_INPUT_FIELD_PLACEHOLDER = 'Type TODO message here';
export const EMPTY_TASKS_LIST_MESSAGE = 'There are no TODOs here yet';
export const TASK_ADD_BUTTON_TEXT = 'New TODO';
export const REGISTER_SUBMIT_BUTTON_TEXT = 'Sign up';

export const FORM_VALIDATION_MESSAGES = {
  BLANK_FIELDS: 'You should fill in all the fields!',
  INVALID_NAME_LENGTH: `Name length should be between ${ USER_NAME_MIN_LENGTH } and ${ USER_NAME_MAX_LENGTH } characters!`,
  INVALID_NAME_PATTERN: 'Name can only contain alphabet symbols, numbers and "-", "_" characters!',
  INVALID_EMAIL_PATTERN: 'You entered an incorrect E-mail address!',
  INVALID_PASSWORD_LENGTH: `Password length should be at least ${ USER_PASSWORD_MIN_LENGTH } characters!`,
  INVALID_PASSWORD_PATTERN: 'Password shouldn`t contain any whitespace symbols!',
  PASSWORDS_MISMATCH: 'Passwords must be the same!'
} 

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
export enum PAGE_ROUTES {
  SIGNUP = '/signup',
  SIGNIN = '/signin',
  MAIN = '/'
}

export enum FORM_HEADINGS {
  POPUP = 'Warning',
  REGISTER = 'Welcome to Advanced TODO App !\nRegister a new user:',
  LOGIN = 'Login'
}

export const TASKS_LIST_AUTOSCROLL_OPTIONS: ScrollIntoViewOptions = {
  behavior: 'smooth'
};

export const BASE_URL = 'http://localhost:4000';
