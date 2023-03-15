import { FaTrash } from 'react-icons/fa';
const TodoList = () => {
  return (
    <div className='flex justify-between gap-5 items-center mt-5 border-b-2 border-gray-100 pb-2'>
      <div className='flex gap-3 items-baseline'>
        <input type='checkbox' id='todo' />
        <label htmlFor='todo' className='text-lg text-gray-500 leading-tight'>
          A To do app developed using to consolidate your knowledge about react
        </label>
      </div>
      <div className='bg-red-100 p-3 rounded-full cursor-pointer'>
        <FaTrash className='text-red-500' />
      </div>
    </div>
  );
};

export default TodoList;
