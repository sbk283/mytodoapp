import { useState } from 'react';
import { TodoType } from '../../types/todoType';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps): JSX.Element {
  // ts 자리
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(todo.title);

  const handleEdit = () => {
    onEdit(todo.title, editTitle);
    setIsEdit(true);
  };

  const handleEditSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle.trim());
      setIsEdit(false);
    }
  };
  const handleEditCancel = () => {
    setIsEdit(false);
    setEditTitle(todo.title);
  };
  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onToggle(todo.id);
    } else if (event.key === 'Escape') {
      setIsEdit(false);
      setEditTitle(todo.title);
    }
  };

  // tsx 자리
  return (
    <li
      className={[
        'flex items-center justify-between gap-2 rounded-lg border px-3 py-2',
        todo.completed ? 'text-neutral-400 line-through' : 'text-neutral-900 dark:text-neutral-100',
      ].join(' ')}
    >
      {isEdit ? (
        <div className="flex w-full items-center gap-3">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleEnterKey}
            className="flex-1 rounded-md border border-neutral-300 bg-white px-2 py-1 outline-none focus:ring-brand dark:border-neutral-700 dark:bg-neutral-900"
          />
          <button
            onClick={handleEditSave}
            className="rounded-md bg-brand px-3 py-1 text-white hover:opacity-90"
          >
            저장
          </button>
          <button
            onClick={handleEditCancel}
            className="rounded-md border border-neutral-300 px-2 py-1 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            취소
          </button>
        </div>
      ) : (
        <div className="flex w-full items-center gap-3">
          <input
            type="checkbox"
            onChange={() => onToggle(todo.id)}
            checked={todo.completed}
            className="h-4 w-4 accent-brand"
          />
          <span className="flex-1">{todo.title}</span>
          <button
            onClick={handleEdit}
            className="dark: rounded-md border border-neutral-300 px-3 py-1 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            수정
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="rounded-md border border-red-300 px-3 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            삭제
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
