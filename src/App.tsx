import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/todos/TodoList';
import TodoWrite from './components/todos/TodoWrite';
import { TodoType } from './types/todoType';

function App(): JSX.Element {
  // ts 자리
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTodoUpdate = (newTodo: TodoType): void => {
    const arr: TodoType[] = [newTodo, ...todos];
    setTodos(arr);
  };

  const onToggle = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };
  const onDelete = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  const onEdit = (id: string, newtitle: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, title: newtitle } : todo)),
    );
  };

  // tsx 자리
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Header />
      <main className="container-app py-8">
        <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
