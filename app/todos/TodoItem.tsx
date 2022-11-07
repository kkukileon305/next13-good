import { Todo } from '../interface';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return <li className={`p-4 rounded mb-4 text-white font-bold ${todo.completed ? 'bg-blue-300' : 'bg-red-300'}`}>{todo.todo}</li>;
};
export default TodoItem;
