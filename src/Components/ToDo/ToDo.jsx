import { useState } from 'react';
import { FaCheck, FaTrash, FaPlus } from 'react-icons/fa6';

const Todo = () => {
  const initialTask = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  ];
  const [todos, setTodos] = useState(initialTask);
  const [newTodo, setNewTodo] = useState('');
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const todoWithDate = `${newTodo} (last added ${currentDate})`;
      setTodos([...todos, todoWithDate]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodoSelection = (index) => {
    const isSelected = selectedTodos.includes(index);
    if (isSelected) {
      setSelectedTodos(selectedTodos.filter((i) => i !== index));
    } else {
      setSelectedTodos([...selectedTodos, index]);
    }
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedTodos([...Array(todos.length).keys()]);
    } else {
      setSelectedTodos([]);
    }
  };

  const deleteSelectedTodos = () => {
    const newTodos = todos.filter((_, index) => !selectedTodos.includes(index));
    setTodos(newTodos);
    setSelectedTodos([]);
    setSelectAll(false);
  };

  return (
    <div className='bg-[#fff] p-[16px]'>
      <h2 className='text-[16px] font-semibold'>To-Do List</h2>
      <div className='flex gap-7 mt-3 px-2'>
        <div className='w-[394px] rounded-xl' style={{ border: '1px solid #EDEBEB', position: 'relative' }}>
          <input
            className='h-28 rounded-xl w-full pl-2'
            type='text'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          {/* Show "+" icon on mobile devices */}
          <FaPlus className='md:hidden'
            onClick={addTodo}
            style={{
              position: 'absolute',
              right: '8px',
              bottom: '8px',
              cursor: 'pointer',
              fontSize: '20px',
              color: 'grey',
             // Initially hide the icon
            }}
          />
        </div>
        {/* Show "Add" button on larger screens */}
        <div className='hidden md:block'>
        <button
          onClick={addTodo}
          style={{
            background: 'linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)',
             // Initially show the button
          }}
          className='flex items-center gap-2 px-4 h-12 text-white rounded-xl '
        >
          <FaCheck /> Add
        </button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
      <div className='mt-3'>
        <label>
          <input
            type='checkbox'
            checked={selectAll}
            onChange={toggleSelectAll}
            className='mr-2'
          />
          Select All
        </label>
      </div>
      <div className='mt-3'>
        <button
          onClick={deleteSelectedTodos}
          style={{
            background: 'linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)',
          }}
          className='flex items-center gap-6 p-3 text-white rounded-xl'
        >
          <FaTrash /> Done
        </button>
      </div>
      </div>
      <div className='mt-3'>
        {todos.map((todo, index) => (
          <div key={index} className='flex items-center mb-2'>
            <input
              type='checkbox'
              checked={selectedTodos.includes(index)}
              onChange={() => toggleTodoSelection(index)}
              className='mr-2'
            />
            {todo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
