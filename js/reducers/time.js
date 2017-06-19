
import type { Action } from '../actions/types';
import { SET_TIME } from '../actions/time';

export type State = {
    time: string
}

const initialState = {
  time: 'time',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_TIME) {
    return {
      ...state,
      time: action.payload,
    };
  }
  return state;
}
