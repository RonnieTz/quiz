import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { selectCategory, setDifficulty, setQuantity } from "../../redux/slice";

const Options = () => {
  const { options } = useSelector((state: RootState) => state.store);
  const { categories, quantity, difficulties } = options;
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="options">
      <label>Choose categories</label>
      <div className="categories">
        {categories.map((item) => (
          <span
            onClick={() => dispatch(selectCategory(item.id))}
            key={item.id}
            className={item.selected ? "selected" : ""}
          >
            {item.name}
          </span>
        ))}
      </div>
      <label htmlFor="quantity">{`${quantity} questions`}</label>
      <input
        className="quantity"
        value={quantity}
        max={50}
        min={5}
        type="range"
        onChange={(e) => dispatch(setQuantity(e.target.valueAsNumber))}
      />
      <label>Choose difficulties</label>
      <div className="categories">
        {difficulties.map((item) => (
          <span
            onClick={() => dispatch(setDifficulty(item.name))}
            key={item.name}
            className={item.selected ? "selected" : ""}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Options;
