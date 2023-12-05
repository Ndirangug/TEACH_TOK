import {configureStore} from '@reduxjs/toolkit';
import mcqReducer from './mcq/mcqSlice';
import timerReducer from './timer/timerSlice';

export const store = configureStore({
  reducer: {
    mcq: mcqReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
