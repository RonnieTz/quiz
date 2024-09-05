import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import axios from 'axios';
import { v4 } from 'uuid';

export const fetchQuestions = createAsyncThunk(
  'app/fetchQuestions',
  async () => {
    const response = await axios.get('https://opentdb.com/api.php?amount=10');

    const data: {
      category: string;
      correct_answer: string;
      difficulty: string;
      question: string;
      type: string;
      incorrect_answers: string[];
    }[] = response.data.results;

    const modifiedData = data.map((question) => {
      return {
        question: question.question,
        answers: [
          { value: question.correct_answer, selected: false },
          ...question.incorrect_answers.map((answer) => {
            return { value: answer, selected: false };
          }),
        ].sort(() => Math.random() - 0.5),
        correct_answer: question.correct_answer,
        time: 0,
        questionAnswered: false,
        id: v4(),
        timeIsUp: false,
      };
    });

    return modifiedData;
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    setTimer: (
      state,
      action: PayloadAction<{ time: number; currentQuestion: number }>
    ) => {
      state.questions[action.payload.currentQuestion].time =
        action.payload.time;
    },
    selectQuestionAnswer: (
      state,
      action: PayloadAction<{ questionIndex: number; answerIndex: number }>
    ) => {
      state.questions[action.payload.questionIndex].answers[
        action.payload.answerIndex
      ].selected = true;
    },
    timeUp: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.questions[action.payload].timeIsUp = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export const { setCurrentQuestion, setTimer, selectQuestionAnswer, timeUp } =
  appSlice.actions;
export default appSlice.reducer;
