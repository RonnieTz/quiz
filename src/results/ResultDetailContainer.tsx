type Props = {
  userAnswer: string | undefined;
  correctAnswer: string;
};

const ResultDetailContainer = ({ correctAnswer, userAnswer }: Props) => {
  return (
    <div className="result-detail-container">
      {correctAnswer === userAnswer && (
        <div
          style={{ color: 'rgb(0, 121, 74 )' }}
        >{`Your Answer: ${userAnswer}`}</div>
      )}
      {correctAnswer !== userAnswer && (
        <>
          {
            <div style={{ color: 'rgb(154, 34, 34 )' }}>{`Your Answer: ${
              userAnswer ? userAnswer : ''
            }`}</div>
          }
          <div>{`Correct Answer: ${correctAnswer}`}</div>
        </>
      )}
    </div>
  );
};
export default ResultDetailContainer;
