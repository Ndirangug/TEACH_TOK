import api from '../../../utils/api';

export class MCQFetchError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, MCQFetchError.prototype);
  }
}

export class AnswerFetchError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, AnswerFetchError.prototype);
  }
}

const mcqRepository = {
  fetchQuestion: async (): Promise<MCQ> => {
    try {
      const response = await api.get('/for_you');
      return response.data;
    } catch (error) {
      throw new MCQFetchError(`${error}`);
    }
  },
  fetchAnswer: async (questionId: number): Promise<MCQResponse> => {
    try {
      const response = await api.get(`/reveal?id=${questionId}`);
      return response.data;
    } catch (error) {
      throw new AnswerFetchError(`${error}`);
    }
  },
};

export default mcqRepository;
