import { decode } from 'html-entities';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionAnswer } from '../redux/appSlice';
import { RootState } from '../redux/store';
import Tick from './Tick';

type Props = {
  status: string;
  answer: { value: string; selected: boolean };
  answerIndex: number;
};

const Answer = ({ answer, status, answerIndex }: Props) => {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  const className = `answer ${status}`;
  const question = questions[currentQuestion];
  return (
    <div
      onClick={() => {
        if (
          questions[currentQuestion].answers.some((answer) => answer.selected)
        )
          return;
        dispatch(
          selectQuestionAnswer({
            questionIndex: currentQuestion,
            answerIndex,
          })
        );
      }}
      className={'answer-box'}
    >
      <div className={className}>
        {decode(answer.value)}

        {question.correct_answer === answer.value && answer.selected && (
          <Tick />
        )}
      </div>
    </div>
  );
};

export default Answer;
