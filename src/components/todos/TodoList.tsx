import { TodoType } from '../../types/todoType';
import TodoItem from './TodoItem';

type TodoItemProps = {
  todos: TodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

function TodoList({ todos, onToggle, onDelete, onEdit }: TodoItemProps): JSX.Element {
  // ts 자리
  // tsx 자리

  return (
    <div>
      <h2 className="text-xl font-semibold">TODO LIST</h2>
      {todos.length === 0 ? (
        <p className="mt-3 text-neutral-500">목록이 없습니다.</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
