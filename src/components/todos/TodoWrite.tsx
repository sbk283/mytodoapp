import React, { useState } from 'react';
import { TodoType } from '../../types/todoType';

type TodoWriteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: (newTodo: TodoType) => void;
};

function TodoWrite({ setTodos, handleTodoUpdate }: TodoWriteProps): JSX.Element {
  // ts 자리
  const [title, setTitle] = useState<string>('');
  // tsx 자리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && title.trim()) {
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
    <div>
      <h2>할 일 추가</h2>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}

export default TodoWrite;
