import {
  fetchAnswerFailure,
  fetchAnswerSuccess,
  fetchQuestionFailure,
  fetchQuestionStart,
  fetchQuestionSuccess,
} from '../../redux/mcq/mcqSlice';
import {store} from '../../redux/store';
import mcqRepository, {AnswerFetchError} from './mcqRepository';

const MCQUseCase = {
  fetchQuestion: async () => {
    const questions = store.getState().mcq.questions;

    store.dispatch(fetchQuestionStart());
    const currentQuestionIndex =
      questions.length <= 0 ? 0 : questions.length - 1;

    try {
      const question = await mcqRepository.fetchQuestion();
      store.dispatch(
        fetchQuestionSuccess({...question, index: currentQuestionIndex}),
      );

      const answer = await mcqRepository.fetchAnswer(question.id!);
      store.dispatch(
        fetchAnswerSuccess({
          answers: answer.correctOptions,
          index: currentQuestionIndex,
        }),
      );
    } catch (error) {
      if (error instanceof AnswerFetchError) {
        store.dispatch(
          fetchAnswerFailure({index: currentQuestionIndex, error}),
        );
      } else {
        store.dispatch(
          // @ts-ignore
          fetchQuestionFailure({index: currentQuestionIndex, error}),
        );
      }
    }
  },
};

export default MCQUseCase;
