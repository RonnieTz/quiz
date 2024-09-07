import AnswersContainer from './quiz/AnswersContainer';
import Footer from './quiz/Footer';
import QuestionContainer from './quiz/QuestionContainer';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryContainer from './loader/CategoryContainer';
import DifficultyContainer from './loader/DifficultyContainer';
import AmountContainer from './loader/AmountContainer';
import ResultsContainer from './results/ResultsContainer';

const Container = () => {
  const { questions, currentQuestion } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CategoryContainer />
                <DifficultyContainer />
                <AmountContainer />
              </>
            }
          />
          <Route
            path="/session"
            element={
              questions.length && (
                <>
                  <QuestionContainer
                    question={questions[currentQuestion].question}
                  />
                  <AnswersContainer
                    answers={questions[currentQuestion].answers}
                  />
                  <Footer />
                </>
              )
            }
          />
          <Route path="/results" element={<ResultsContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Container;
