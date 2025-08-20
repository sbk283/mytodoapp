import React, { useState } from 'react';
import { TodoType } from '../../types/todoType';

type TodoWriteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: (newTodo: TodoType) => void;
};

function TodoWrite({ setTodos, handleTodoUpdate }: TodoWriteProps): JSX.Element {
  const [title, setTitle] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // 수정된 부분: isComposing 확인 추가
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // 한글 입력 중(조합 중)이면 실행하지 않음
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter' && title.trim()) {
      const newTodo: TodoType = {
        id: Date.now().toString(),
        title: title.trim(),
        completed: false,
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      handleTodoUpdate(newTodo);
      setTitle('');
      console.log('할 일 추가:', newTodo);
    }
  };

  const handleAdd = () => {
    if (title.trim()) {
      const newTodo: TodoType = {
        id: Date.now().toString(),
        title: title.trim(),
        completed: false,
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      handleTodoUpdate(newTodo);
      setTitle('');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <h2>할 일 추가</h2>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
        className="flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand dark:border-neutral-700 dark:bg-neutral-900"
      />
      <button
        onClick={handleAdd}
        className="px-y rounded-lg bg-brand py-2 text-white hover:opacity-90 active:opacity-80"
      >
        추가
      </button>
    </div>
  );
}

export default TodoWrite;
