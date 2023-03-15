import { FaTrash } from 'react-icons/fa';
const TodoList = ({ title, handleDelete }) => {
  return (
    <div className='flex justify-between gap-5 items-center mt-5 border-b-2 border-gray-100 pb-2'>
      <div className='flex gap-3 items-baseline'>
        <input type='checkbox' id='todo' />
        <label htmlFor='todo' className='text-xl text-gray-500 leading-tight'>
          {title}
        </label>
      </div>
      <div className='bg-red-100 p-3 rounded-full cursor-pointer'>
        <FaTrash onClick={handleDelete} className='text-red-500' />
      </div>
    </div>
  );
};

export default TodoList;
