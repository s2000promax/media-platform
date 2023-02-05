import { combineReducers } from 'redux';
import { playerReducer } from '@/store/reducers/playerReducer';
import { HYDRATE } from 'next-redux-wrapper';

export const rootReducer = combineReducers({
  player: playerReducer,
});

// @ts-ignore
export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
}

export type RootState = ReturnType<typeof rootReducer>;
