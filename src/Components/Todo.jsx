import { useGlobalContext } from '../Context';

export const Todo = () => {
  const { category, setCategory } = useGlobalContext();
  return (
    <div className="flex justify-evenly border-b-2 mb-4">
      <div
        className={`category ${category === 'all' ? 'category-active' : ''}`}
        onClick={() => setCategory('all')}
      >
        All
      </div>
      <div
        className={`category ${category === 'active' ? 'category-active' : ''}`}
        onClick={() => setCategory('active')}
      >
        Active
      </div>
      <div
        className={`category ${
          category === 'complete' ? 'category-active' : ''
        }`}
        onClick={() => setCategory('complete')}
      >
        Completed
      </div>
    </div>
  );
};
