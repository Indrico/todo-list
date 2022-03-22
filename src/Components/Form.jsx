import { useGlobalContext } from '../Context';
import { useState } from 'react';

export const Form = () => {
  const [input, setInput] = useState('');
  const { data, setData } = useGlobalContext();

  const handleSubmit = (value) => {
    const todo = {
      title: value,
      id: new Date().getTime().toString(),
      status: 'active',
    };
    setData([...data, todo]);
    setInput('');
  };

  return (
    <form
      className="flex space-x-4 mb-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(input);
      }}
    >
      <input
        type="text"
        placeholder="Add Details"
        className="border-2 border-gray-400 px-4 py-2 rounded-xl w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        className="px-8 py-2 bg-blue-600 text-white rounded-xl"
        onClick={() => handleSubmit(input)}
      >
        Add
      </button>
    </form>
  );
};
