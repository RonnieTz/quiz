import Answer from './Answer';

const AnswersContainer = () => {
  return (
    <div className="answers-container">
      <Answer answer="Answer 1" status="correct" />
      <Answer answer="Answer 2" status="incorrect" />
      <Answer answer="Answer 3" status="initial" />
      <Answer answer="Answer 4" status="not-selected" />
    </div>
  );
};

export default AnswersContainer;
