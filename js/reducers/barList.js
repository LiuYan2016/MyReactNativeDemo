
import type { Action } from '../actions/types';
import { SET_BARINDEX } from '../actions/barList';

export type State = {
  barList: array,
  selectedIndex: number
}

const initialState = {
  barList: [
    {
      barImg: require('../../images/hangar.png'),
      barName: 'The Hangar Food and Spirits',
      distance: 7,
      address: '13610 N Scottsdale Rd #30, Scottsdale, AZ 85254,USA'
    },
    {
      barImg: require('../../images/pattie.png'),
      barName: "Pattie's First Avenue Lounge",
      distance: 10,
      address: '7220 E 1st Ave Scottsdale,AZ 85251,USA'
    },
    {
      barImg: require('../../images/secondstory.png'),
      barName: 'Second Story Liquor Bar',
      distance: 5,
      address: '4166 N Scottsdale Rd #102 Scottsdale,AZ 85251,USA'
    },
    {
      barImg: require('../../images/pattie.png'),
      barName: "Pattie's First Avenue Lounge",
      distance: 10,
      address: '7220 E 1st Ave Scottsdale,AZ 85251,USA'
    },
    {
      barImg: require('../../images/secondstory.png'),
      barName: 'Second Story Liquor Bar',
      distance: 5,
      address: '4166 N Scottsdale Rd #102 Scottsdale,AZ 85251,USA'
    }
  ],
  selectedIndex: 0,
  barCount: 3
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_BARINDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  return state;
}
