interface MCQUser {
  name: string;
  avatar: string;
}

interface MCQChices {
  id: string;
  answer: string;
}

interface MCQResponse {
  id: number;
  correctOptions: MCQChices[];
}

interface MCQ {
  type?: string;
  question?: string;
  correctAnswers?: MCQChices[];
  id?: number;
  playlist?: string;
  description?: string;
  image?: string;
  choices?: MCQChices[];
  user?: MCQUser;
}
