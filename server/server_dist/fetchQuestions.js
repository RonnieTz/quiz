import axios from "axios";
export const fetchQuestions = async (categories, limit, difficulties) => {
    const categoriesJoined = categories.join(",");
    const difficultiesJoined = difficulties.join(",");
    try {
        const res = await axios.get(`https://the-trivia-api.com/v2/questions?categories=${categoriesJoined}&difficulties=${difficultiesJoined}&limit=${limit}`);
        const questions = res.data.map((item) => {
            return {
                question: item.question.text,
                correctAnswer: item.correctAnswer,
                answers: [item.correctAnswer, ...item.incorrectAnswers]
                    .map((value) => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => ({ value, selected: false })),
                questionAnswered: false,
            };
        });
        return questions;
    }
    catch (err) {
        console.log(err);
    }
};
