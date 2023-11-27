import {createSlice} from '@reduxjs/toolkit';

export interface MCQStateItem extends MCQ {
  questionLoading: boolean;
  answerLoading: boolean;
  error: string | null;
  index: number;
}

export interface MCQState {
  questions: MCQStateItem[];
}

export const initialState: MCQState = {
  questions: [],
};

const questionSlice = createSlice({
  name: 'mcq',
  initialState,
  reducers: {
    fetchQuestionStart: state => {
      const index = state.questions.length;
      state.questions[index] = {
        questionLoading: true,
        answerLoading: true,
        error: null,
        index,
      };
    },
    fetchQuestionSuccess: (state, action) => {
      const index = action.payload.index;
      state.questions[index] = {
        ...state.questions[index],
        questionLoading: false,
        ...action.payload,
      };
    },
    fetchQuestionFailure: (state, action) => {
      console.error('fetch question failure', action);

      const index = action.payload.index;
      state.questions[index].questionLoading = false;
      state.questions[index].error = action.payload.error;
    },
    fetchAnswerStart: (_state, _action) => {
      //const index = action.payload.index;
    },
    fetchAnswerSuccess: (state, action) => {
      const index = action.payload.index;
      state.questions[index].answerLoading = false;
      state.questions[index].correctAnswers = action.payload.answers;
    },
    fetchAnswerFailure: (state, action) => {
      console.error('fetch answer failure', action);
      const index = action.payload.index;
      state.questions[index].answerLoading = false;
      state.questions[index].error = action.payload.error;
    },
  },
});

export const {
  fetchQuestionStart,
  fetchQuestionSuccess,
  fetchQuestionFailure,
  fetchAnswerStart,
  fetchAnswerSuccess,
  fetchAnswerFailure,
} = questionSlice.actions;

export default questionSlice.reducer;
