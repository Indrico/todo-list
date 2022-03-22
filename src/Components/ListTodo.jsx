import { useGlobalContext } from '../Context';
import { Checkbox } from './CheckBox';
import { FiTrash } from 'react-icons/fi';

export const ListTodo = () => {
  const { data, category, setData } = useGlobalContext();

  let tempData = [];

  if (category === 'active') {
    tempData = data.filter((item) => {
      if (item.status === 'active') {
        return item;
      }
    });
  } else if (category === 'complete') {
    tempData = data.filter((item) => {
      if (item.status === 'completed') {
        return item;
      }
    });
  } else {
    tempData = data.map((item) => item);
  }

  return (
    <div className="mt-4">
      {tempData.map((item) => {
        return <Checkbox key={item.id} {...item} />;
      })}
      {category === 'complete' && (
        <div className='flex justify-end mt-4'>
          <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => setData([])}>
            <FiTrash />
            <p>Delete All</p>
          </button>
        </div>
      )}
    </div>
  );
};
