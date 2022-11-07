'use client';

import { useState } from 'react';
import { TodosResponse } from '../interface';
import TodoItem from './TodoItem';

const Option = ({ todosResponse }: { todosResponse: TodosResponse }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className='p-4'>
      <h2 className='mb-4 font-bold flex items-center gap-4 cursor-pointer' onClick={() => setIsCompleted(p => !p)}>
        Only show completed todo <div className={`w-4 aspect-square border-black ${isCompleted ? 'bg-blue-500' : 'bg-red-300'}`} />
      </h2>

      <ul>{isCompleted ? todosResponse.todos.filter(todo => todo.completed).map(todo => <TodoItem key={todo.id} todo={todo} />) : todosResponse.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</ul>
    </div>
  );
};
export default Option;
