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

  // 할 일 추가 로직을 함수로 분리
  const addTodo = () => {
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // 한글 입력 중(조합 중)이면 실행하지 않음
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 제출 방지
      addTodo();
    }
  };

  const handleAdd = () => {
    addTodo();
  };

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-white via-neutral-50 to-white p-6 shadow-xl shadow-neutral-900/5 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/10 dark:border-neutral-700/50 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 dark:shadow-black/20">
      {/* 배경 장식 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-blue-500/5"></div>
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-brand/10 to-blue-500/10 blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-tr from-purple-500/10 to-brand/10 blur-xl"></div>

      <div className="relative z-10">
        {/* 헤더 영역 */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-blue-600 shadow-lg shadow-brand/25">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-300">
              새로운 할 일 추가
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              목표를 설정하고 성취해보세요
            </p>
          </div>
        </div>

        {/* 입력 영역 */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="group flex-1">
            <div className="relative">
              <input
                type="text"
                value={title}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="예: 운동하기, 책 읽기, 프로젝트 완성하기..."
                className="w-full rounded-xl border-2 border-neutral-200 bg-white/70 px-5 py-4 text-sm font-medium transition-all duration-300 placeholder-neutral-400 backdrop-blur-sm outline-none focus:border-brand focus:bg-white focus:shadow-lg focus:shadow-brand/10 group-hover:border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800/70 dark:text-white dark:placeholder-neutral-500 dark:focus:border-brand dark:focus:bg-neutral-800"
                maxLength={100}
              />

              {/* 입력 필드 글로우 효과 */}
              {title && (
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-brand/20 to-blue-500/20 blur-lg"></div>
              )}
            </div>

            {/* 글자 수 및 상태 표시 */}
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                {title.length > 0 && (
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>좋아요!</span>
                  </div>
                )}
              </div>
              <div
                className={`text-xs transition-colors ${
                  title.length > 80
                    ? 'text-orange-500 dark:text-orange-400'
                    : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {title.length}/100
              </div>
            </div>
          </div>

          {/* 추가 버튼 */}
          <button
            onClick={handleAdd}
            disabled={!title.trim()}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/30 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-lg sm:w-auto"
          >
            {/* 버튼 배경 애니메이션 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

            <span className="relative flex items-center gap-2">
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  title.trim() ? 'group-hover:rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              추가하기
            </span>
          </button>
        </div>

        {/* 안내 텍스트 */}
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg bg-neutral-50/50 p-3 backdrop-blur-sm dark:bg-neutral-800/50">
          <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="text-sm">💡</span>
            <span>빠른 추가:</span>
            <kbd className="rounded-md bg-white px-2 py-1 text-xs font-medium shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-700 dark:ring-neutral-600">
              Enter
            </kbd>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="text-sm">⚡</span>
            <span>팁: 구체적인 목표를 설정하면 성취율이 높아져요</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoWrite;
