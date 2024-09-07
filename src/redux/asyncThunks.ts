import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuestions = createAsyncThunk(
  'app/fetchQuestions',
  async (data: {
    categories: string[];
    difficulties: string[];
    limit: number;
  }) => {
    const baseURL = 'https://the-trivia-api.com/v2/questions?';
    const categoriesList = 'categories=' + (data.categories.join(',') || 'all');
    const difficultiesList =
      '&difficulties=' + (data.difficulties.join(',') || 'easy,medium,hard');
    const limit = '&limit=' + data.limit;
    const response = await axios.get(
      `${baseURL}${categoriesList}${difficultiesList}${limit}`
    );
    console.log(response.data);

    const questions: {
      category: string;
      correctAnswer: string;
      difficulty: string;
      id: string;
      question: { text: string };
      incorrectAnswers: string[];
    }[] = response.data;

    const formattedQuestions = questions.map((question) => {
      const answers = [
        ...question.incorrectAnswers,
        question.correctAnswer,
      ].sort(() => 0.5 - Math.random());
      return {
        question: question.question.text,
        answers: answers.map((answer) => {
          return { value: answer, selected: false };
        }),
        correct_answer: question.correctAnswer,
        time: 0,
        id: question.id,
        timeIsUp: false,
      };
    });

    return formattedQuestions;
  }
);

export const fetchTags = createAsyncThunk('app/fetchTags', async () => {
  const response = await axios.get('https://the-trivia-api.com/v2/tags');
  return response.data;
});
