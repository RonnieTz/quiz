import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { setAmount } from '../redux/appSlice';
import { fetchQuestions } from '../redux/asyncThunks';
import { useNavigate } from 'react-router-dom';

const AmountContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { amount, maxAmount, categories, difficulties } = useSelector(
    (state: RootState) => state.app
  );
  return (
    <div className="amount-container">
      <label className="amount-label" htmlFor="amount">
        Select amount
      </label>
      <div style={{ position: 'relative' }}>
        <input
          value={amount || 0}
          onChange={(e) => {
            if (
              (e.target.valueAsNumber <= maxAmount &&
                e.target.valueAsNumber > 0) ||
              e.target.value === ''
            ) {
              dispatch(setAmount(parseInt(e.target.value)));
            }
          }}
          type="number"
          id="amount"
        />
        <div
          style={{
            fontSize: '0.8rem',
            textAlign: 'center',
            marginTop: '0.3rem',
          }}
        >{`Max ${maxAmount}`}</div>
      </div>
      <button
        onClick={() => {
          dispatch(
            fetchQuestions({
              categories: categories
                .filter((category) => {
                  return category.selected;
                })
                .map((category) => category.name),
              difficulties: difficulties
                .filter((difficulty) => {
                  return difficulty.selected;
                })
                .map((difficulty) => difficulty.value),
              limit: Number(amount),
            })
          );
          navigate('/session');
        }}
      >
        Start
      </button>
    </div>
  );
};
export default AmountContainer;
