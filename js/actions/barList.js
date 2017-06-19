
import type { Action } from './types';

export const SET_BARINDEX = 'SET_BARINDEX';

export function setBarIndex(index:number):Action {
  return {
    type: SET_BARINDEX,
    payload: index,
  };
}
