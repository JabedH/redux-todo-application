import {
  ADDED,
  TOGGLE,
  COLORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLTED,
} from "./actionType";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLE,
    payload: todoId,
  };
};
export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearcompleted = () => {
  return {
    type: CLEARCOMPLTED,
  };
};
