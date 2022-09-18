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
