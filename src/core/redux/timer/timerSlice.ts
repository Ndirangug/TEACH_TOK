import {createSlice} from '@reduxjs/toolkit';

export interface TimerState {
  seconds: number;
}

const initialState: TimerState = {
  seconds: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {
    incrementSeconds: state => {
      state.seconds += 1;
    },
  },
});

export const {incrementSeconds} = timerSlice.actions;
export default timerSlice.reducer;
