import { use } from 'react';
import { TodosResponse } from '../interface';
import TodoItem from './TodoItem';
import Option from './Option';

const getTodos = async (): Promise<TodosResponse> => {
  const res = await fetch('https://dummyjson.com/todos');
  return res.json();
};

export default function TodosPage() {
  const todos = use(getTodos());

  return <Option todosResponse={todos} />;
}
