export const initialState: {
  questions: {
    question: string;
    answers: { value: string; selected: boolean }[];
    correct_answer: string;
    time: number;
    id: string;
  }[];
  currentQuestion: number;
} = { questions: [], currentQuestion: 0 };
