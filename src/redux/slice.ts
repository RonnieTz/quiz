import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const slice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setState: (state, action) => {
      state.state = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUsername: (state, action) => {
      state.form.username = action.payload;
    },
    setPassword: (state, action) => {
      state.form.password = action.payload;
    },
    setPassword_2: (state, action) => {
      state.form.password_2 = action.payload;
    },
    setFormMessage: (state, action) => {
      state.form.message = action.payload;
    },
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
    setGame: (state, action) => {
      state.game.questions = action.payload;
    },
    resetForm: (state, _action) => {
      state.form = { username: "", password: "", password_2: "", message: "" };
    },

    selectCategory: (state, action) => {
      const index = state.options.categories.findIndex(
        (item) => item.id === action.payload
      );
      const general = state.options.categories.length - 1;
      state.options.categories[index].selected =
        !state.options.categories[index].selected;
      if (state.options.categories.every((item) => !item.selected)) {
        state.options.categories[general].selected = true;
      }
    },
    setQuantity: (state, action) => {
      state.options.quantity = action.payload;
    },
    setDifficulty: (state, action) => {
      const index = state.options.difficulties.findIndex(
        (item) => item.name === action.payload
      );

      state.options.difficulties[index].selected =
        !state.options.difficulties[index].selected;

      if (state.options.difficulties.every((item) => !item.selected)) {
        state.options.difficulties[1].selected = true;
      }
    },
    selectAnswer: (state, action) => {
      const {
        questionIndex,
        answerIndex,
      }: { questionIndex: number; answerIndex: number } = action.payload;
      if (
        state.game.questions[questionIndex].answers.every(
          (answer) => !answer.selected
        )
      ) {
        state.game.questions[questionIndex].answers[answerIndex].selected =
          !state.game.questions[questionIndex].answers[answerIndex].selected;
      } else {
        state.game.questions[questionIndex].answers = state.game.questions[
          questionIndex
        ].answers.map((answer) => ({ ...answer, selected: false }));
        state.game.questions[questionIndex].answers[answerIndex].selected =
          !state.game.questions[questionIndex].answers[answerIndex].selected;
      }
    },
    setCurrentQuestion: (state, action) => {
      state.game.currentQuestion = action.payload;
    },
    answerQuestion: (state, action) => {
      state.game.questions[action.payload].questionAnswered = true;
    },
    setTotalCorrectAnswers: (state, action) => {
      state.game.totalCorrectAnswers = action.payload;
    },
  },
});

export const {
  setPassword,
  setPassword_2,
  setUsername,
  setFormMessage,
  resetForm,
  setState,
  setName,
  setGameStatus,
  selectCategory,
  setQuantity,
  setDifficulty,
  setGame,
  selectAnswer,
  setCurrentQuestion,
  answerQuestion,
  setTotalCorrectAnswers,
} = slice.actions;
export default slice.reducer;
