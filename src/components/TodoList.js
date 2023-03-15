import { FaTrash } from 'react-icons/fa';

const TodoList = ({ title, isChecked, handleDelete, handleComplete }) => {
  return (
    <div className='flex justify-between gap-5 items-center mt-5 border-b-2 border-gray-100 pb-2'>
      <div className='flex gap-3 items-baseline'>
        <input type='checkbox' id='todo' onClick={handleComplete} />
        <label htmlFor='todo' className={`text-xl text-gray-500 leading-tight ${isChecked ? 'line-through' : 'no-underline'}`}>
          {title}
        </label>
      </div>
      <div onClick={handleDelete} className='bg-red-100 p-3 rounded-full cursor-pointer'>
        <FaTrash className='text-red-500' />
      </div>
    </div>
  );
};

export default TodoList;
