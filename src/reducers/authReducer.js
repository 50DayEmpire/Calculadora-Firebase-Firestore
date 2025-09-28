import { types } from "../types/types";

const initialState = {
  checking: true,
  uid: null,
  displayName: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        checking: false,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
      };

    case types.logout:
      return {
        checking: false,
        uid: null,
        displayName: null,
      };
    case types.finishChecking:
      return {
        ...state,
        checking: false,
      };

    default:
      return state;
  }
};
