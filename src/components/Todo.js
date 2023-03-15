import { HiPlusCircle } from 'react-icons/hi';

import TodoList from './TodoList';
const Todo = () => {
  return (
    <div className='w-[600px]'>
      <h1 className='text-6xl text-center font-bold text-gray-100'>Todos</h1>
      <div className='flex gap-3 items-center py-3 px-7 rounded-full shadow-3xl mt-5'>
        <input type='text' placeholder='add todo...' className='w-full bg-transparent text-lg border-none outline-none placeholder:text-gray-200' />
        <HiPlusCircle size={30} className='cursor-pointer text-green-500' />
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
