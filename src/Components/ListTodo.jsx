import { useState } from 'react';
import { useGlobalContext } from '../Context';

export const ListTodo = () => {
  const { data } = useGlobalContext();

  const handleData = () => {
    
  }
  
  return (
    <div>
      {data.map((item) => {
      const [isChecked, setIsChecked] = useState(item.status === 'completed' ? true : false);
        return (
          <div key={item.id} className={`flex items-center space-x-4 ${item.status === 'completed' ? 'line-through': ''}`}>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
