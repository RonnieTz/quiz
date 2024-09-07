import AnswersContainer from './session/AnswersContainer';
import Footer from './session/Footer';
import QuestionContainer from './session/QuestionContainer';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryContainer from './home/CategoryContainer';
import DifficultyContainer from './home/DifficultyContainer';
import AmountContainer from './home/AmountContainer';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Container;
