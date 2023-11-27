import {configureStore} from '@reduxjs/toolkit';
import mcqReducer from './mcq/mcqSlice';

export const store = configureStore({
  reducer: {
    mcq: mcqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
