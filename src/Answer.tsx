type Props = { status: string; answer: string };

const Answer = ({ answer, status }: Props) => {
  const className = `answer ${status}`;
  return (
    <div className={'answer-box'}>
      <div className={className}>{answer}</div>
    </div>
  );
};

export default Answer;
