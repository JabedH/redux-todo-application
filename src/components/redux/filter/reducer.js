import { COLORSELECTED } from "../todos/actionType";
import { STATUSCHANGED, COLORCHANGED } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORSELECTED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (exitingColor) => exitingColor !== color
            ),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};
export default reducer;
