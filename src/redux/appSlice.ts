import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchQuestions, fetchTags } from './asyncThunks';

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
    selectCategory: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const allSelectedLength = state.categories.filter(
        (category) => category.selected
      ).length;
      if (allSelectedLength === 9 && !state.categories[index].selected) {
        state.categories.forEach((category) => {
          category.selected = false;
        });
        state.categories[0].selected = true;
        return;
      }
      if (allSelectedLength === 1 && state.categories[index].selected) {
        return;
      }
      state.categories[index].selected = !state.categories[index].selected;
      if (index === 0) {
        state.categories.forEach((category, index) => {
          if (index !== 0) {
            category.selected = false;
          }
        });
      }
      if (index !== 0) {
        state.categories[0].selected = false;
      }
    },
    selectDifficulty: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      const allSelectedLength = state.difficulties.filter(
        (difficulty) => difficulty.selected
      ).length;
      if (allSelectedLength === 2 && !state.difficulties[index].selected) {
        state.difficulties.forEach((difficulty) => {
          difficulty.selected = false;
        });
        state.difficulties[0].selected = true;
        return;
      }
      if (allSelectedLength === 1 && state.difficulties[index].selected) {
        return;
      }
      state.difficulties[index].selected = !state.difficulties[index].selected;
      if (index === 0) {
        state.difficulties.forEach((difficulty, index) => {
          if (index !== 0) {
            difficulty.selected = false;
          }
        });
      }
      if (index !== 0) {
        state.difficulties[0].selected = false;
      }
    },
    setAmount: (state, action: PayloadAction<number | ''>) => {
      state.amount = action.payload;
    },
    setMaxAmount: (state, action: PayloadAction<number>) => {
      state.maxAmount = action.payload;
    },
    addTag: (state, action: PayloadAction<string>) => {
      state.tagsSelected.push(action.payload);
    },
    setResultsWindow: (state, action: PayloadAction<'score' | 'answers'>) => {
      state.results.window = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload;
    });
  },
});

export const {
  setCurrentQuestion,
  setTimer,
  selectQuestionAnswer,
  timeUp,
  selectCategory,
  selectDifficulty,
  setAmount,
  setMaxAmount,
  addTag,
  setResultsWindow,
} = appSlice.actions;
export default appSlice.reducer;
