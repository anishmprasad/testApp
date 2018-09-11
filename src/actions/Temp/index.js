import axios from "axios";

import {
    TEMP,
    TEMPUPDATE
} from "../../actionTypes/Temp";

// type and payload actions
export const createActionWithTypeAndPayload = (type, payload,meta,error) => ({ type, payload,meta,error });


export function tempAction( action ) {
    return function (dispatch, getState) {
        dispatch(
            createActionWithTypeAndPayload(TEMP, action)
        );
    };
}

export function tempActionUpdate(action,id) {
    return function (dispatch, getState) {
        dispatch(
            createActionWithTypeAndPayload(TEMPUPDATE, action,id)
        );
    };
}

