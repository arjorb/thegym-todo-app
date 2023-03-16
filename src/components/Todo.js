import { useState } from 'react';
import { nanoid } from 'nanoid';
import { HiPlusCircle } from 'react-icons/hi';
import TodoItem from './TodoItem';

const Todo = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    const newData = {
      id: nanoid(),
      title: input,
      isChecked: false,
    };
    if (input === '') return;
    setData(prevData => [...prevData, newData]);
    setInput('');
  };

  const handleCompleted = id => {
    const completed = data.map(prevData => {
      return prevData.id === id ? { ...prevData, isChecked: !prevData.isChecked } : prevData;
    });
    setData(completed);
  };

  const handleDelete = id => {
    const deleteData = data.filter(data => {
      return data.id !== id;
    });
    setData(deleteData);
  };

  const todoElement = data.map(todo => <TodoItem key={todo.id} {...todo} handleDelete={() => handleDelete(todo.id)} handleComplete={() => handleCompleted(todo.id)} />);
  return (
    <div className='w-150'>
      <h1 className='text-6xl text-center font-bold text-gray-100'>Todos</h1>
      <div className='flex gap-3 items-center py-3 px-7 rounded-full shadow-3xl mt-5'>
        <input type='text' placeholder='add todo...' onChange={handleChange} value={input} className='w-full bg-transparent text-lg border-none outline-none placeholder:text-gray-200' />
        <HiPlusCircle onClick={handleAdd} size={30} className={`cursor-pointer ${input === '' ? 'text-slate-300' : 'text-green-500'} `} />
      </div>
      {data.length === 0 && <h1 className='text-4xl font-bold text-gray-200 text-center mt-20'>No Todo</h1>}
      {todoElement}
    </div>
  );
};

export default Todo;
