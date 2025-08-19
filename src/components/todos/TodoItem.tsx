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
    <div>
      {isEdit ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleEnterKey}
          />
          <button onClick={handleEditSave}>저장</button>
          <button onClick={handleEditCancel}>취소</button>
        </>
      ) : (
        <>
          <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
          <span>{todo.title}</span>
          <button onClick={handleEdit}>수정</button>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
