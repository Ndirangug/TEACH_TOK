interface MCQUser {
  name: string;
  avatar: string;
}

interface MCQChoice {
  id: string;
  answer: string;
}

interface MCQResponse {
  id: number;
  correctOptions: MCQChoice[];
}

interface MCQ {
  type?: string;
  question?: string;
  correctAnswers?: MCQChoice[];
  id?: number;
  playlist?: string;
  description?: string;
  image?: string;
  options?: MCQChoice[];
  user?: MCQUser;
}
