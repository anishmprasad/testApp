const initialState = {};

import { CANVAS_DATA, IS_PROJECT_CHANGED } from "../actionTypes/graph";

export default function Canvas(state = initialState, action) {
  switch (action.type) {
    case CANVAS_DATA:
      return action.payload;
    case IS_PROJECT_CHANGED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
