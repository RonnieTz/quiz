import Navbar from './Navbar';
import Results from './Results';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './resultsStyles.css';
import AnswersResultsContainer from './AnswersResultsContainer';

const ResultsContainer = () => {
  const { results } = useSelector((state: RootState) => state.app);
  return (
    <div className="results-container">
      <Navbar />
      {results.window === 'score' && <Results />}
      {results.window === 'answers' && <AnswersResultsContainer />}
    </div>
  );
};
export default ResultsContainer;
