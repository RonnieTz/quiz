export const initialState: {
  questions: {
    question: string;
    answers: { value: string; selected: boolean }[];
    correct_answer: string;
    time: number;
    id: string;
    timeIsUp: boolean;
  }[];
  currentQuestion: number;
  categories: { id: number; name: string; selected: boolean }[];
  tags: string[];
  tagsSelected: string[];
  difficulties: { selected: boolean; value: string }[];
  amount: number | '';
  maxAmount: number;
  results: { window: 'score' | 'answers' };
} = {
  questions: [],
  currentQuestion: 0,
  categories: [
    'All Categories',
    'music',
    'sport_and_leisure',
    'film_and_tv',
    'arts_and_literature',
    'history',
    'society_and_culture',
    'science',
    'geography',
    'food_and_drink',
    'general_knowledge',
  ].map((category, index) => {
    return { id: index, name: category, selected: index === 0 ? true : false };
  }),
  difficulties: [
    { value: 'all', selected: false },
    { value: 'easy', selected: true },
    { value: 'medium', selected: false },
    { value: 'hard', selected: false },
  ],
  amount: 10,
  maxAmount: 50,
  tags: [],
  tagsSelected: [],
  results: { window: 'score' },
};
