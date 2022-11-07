import { use } from 'react';
import { TodosResponse } from '../interface';
import TodoItem from './TodoItem';

const getTodos = async (): Promise<TodosResponse> => {
  const res = await fetch('https://dummyjson.com/todos', {
    cache: 'no-store',
  });
  return res.json();
};

export default function TodosPage() {
  const todos = use(getTodos());

  return (
    <div className='p-4'>
      <ul>
        {todos.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
