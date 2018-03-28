import { fromJS } from 'immutable';

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  AUTH_RESET_PASSWORD_TOKEN,
  AUTH_RESET_PASSWORD_TOKEN_SUCCESS,
  AUTH_RESET_PASSWORD_TOKEN_ERROR,
} from './constants';

const initialState = fromJS({});

export default function resetPasswordPageReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return state.set('payload', action.payload);

    case RESET_PASSWORD_SUCCESS:
      return state.set('payload', action.payload);

    case RESET_PASSWORD_ERROR:
      return state.set('error', action.error);

    case AUTH_RESET_PASSWORD_TOKEN:
      return state.set('payload', action.payload.token);

    case AUTH_RESET_PASSWORD_TOKEN_SUCCESS:
      return state.set('payload', action.payload);

    case AUTH_RESET_PASSWORD_TOKEN_ERROR:
      return state.set('error', action.error);

    default:
      return state;
  }
}
