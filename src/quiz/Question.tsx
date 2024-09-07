import { decode } from 'html-entities';

type Props = {
  question: string;
};

const Question = ({ question }: Props) => {
  return <div className="question">{decode(question)}</div>;
};

export default Question;
