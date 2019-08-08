import axios from "axios";
import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../actionTypes/graph';

// import { createActionWithTypeAndPayload } from "appActions/actionTemplates";

// Only type actions
export const createActionWithType = type => ({ type })

// type and payload actions
export const createActionWithTypeAndPayload = (type, payload) => ({type, payload});


export function CanvasData(node) {
  return function(dispatch, getState) {
    dispatch(createActionWithTypeAndPayload(CANVAS_DATA, node));
  };
}

export function isProjectChanged(object) {
  return function(dispatch, getState) {
    dispatch(createActionWithTypeAndPayload(IS_PROJECT_CHANGED, object));
  };
}
