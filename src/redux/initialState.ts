export const initialState: {
  state: "logged_out" | "register" | "login" | "logged_in";
  gameStatus: "options" | "playing" | "finished";
  name: string;
  form: {
    username: string;
    password: string;
    password_2: string;
    message: string;
  };
  options: {
    categories: { id: string; name: string; selected: boolean }[];
    quantity: number;
    difficulties: { name: string; selected: boolean }[];
  };
  game: {
    questions: {
      question: string;
      answers: { value: string; selected: boolean }[];
      correctAnswer: string;
      questionAnswered: boolean;
    }[];
    currentQuestion: number;
    totalCorrectAnswers: number;
  };
} = {
  state: "logged_out",
  form: { username: "", password: "", password_2: "", message: "" },
  name: "",
  gameStatus: "options",
  options: {
    categories: [
      { id: "science", name: "science", selected: false },
      { id: "music", name: "music", selected: false },
      { id: "sport_and_leisure", name: "sport and leisure", selected: false },
      { id: "film_and_tv", name: "film and tv", selected: false },
      {
        id: "arts_and_literature",
        name: "arts and literature",
        selected: false,
      },
      {
        id: "history",
        name: "history",
        selected: false,
      },
      {
        id: "society_and_culture",
        name: "society and culture",
        selected: false,
      },
      {
        id: "geography",
        name: "geography",
        selected: false,
      },
      {
        id: "food_and_drink",
        name: "food and drink",
        selected: false,
      },
      {
        id: "general_knowledge",
        name: "general knowledge",
        selected: true,
      },
    ],
    quantity: 5,
    difficulties: [
      { name: "easy", selected: false },
      { name: "medium", selected: true },
      { name: "hard", selected: false },
    ],
  },
  game: { questions: [], currentQuestion: 0, totalCorrectAnswers: 0 },
};
