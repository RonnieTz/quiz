import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { selectCategory } from '../redux/appSlice';

const CategoryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.app);

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div
          onClick={() => {
            dispatch(selectCategory(index));
          }}
          key={category.id}
          className={`category${category.selected ? ' selected' : ''}`}
        >
          <p style={{ textTransform: 'capitalize' }}>
            {category.name.split('_').join(' ')}
          </p>
        </div>
      ))}
    </div>
  );
};
export default CategoryList;
