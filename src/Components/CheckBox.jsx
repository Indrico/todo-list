import { useGlobalContext } from '../Context';
import { useState, useEffect } from 'react';
import { FiTrash } from 'react-icons/fi';

export const Checkbox = ({ id, status, title }) => {
  const { data, setData, category } = useGlobalContext();
  const [isChecked, setIsChecked] = useState(
    status === 'completed' ? true : false
  );

  useEffect(() => {
    if (isChecked === true) {
      status = 'completed';
    } else {
      status = 'active';
    }

    setData(
      data.map((item) => {
        if (item.id === id) {
          item.status = status;
        }
        return item;
      })
    );
  }, [isChecked]);

  return (
    <div className='flex justify-between'>
      <div
        className={`flex items-center space-x-4 ${
          status === 'completed' ? 'line-through' : ''
        }`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          id={id}
          className="cursor-pointer"
        />
        <label htmlFor={id} className="cursor-pointer">
          {title}
        </label>
      </div>
      {category === 'complete' && <FiTrash />}
    </div>
  );
};
