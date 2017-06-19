
import type { Action } from './types';

export const SET_TIME = 'SET_TIME';

export function setTime(time:string):Action {
  return {
    type: SET_TIME,
    payload: time,
  };
}
