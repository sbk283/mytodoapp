import { TodoType } from '../../types/todoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps): JSX.Element {
  // 완료된 할 일과 미완료 할 일 분리
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  // 통계 계산
  const totalTodos = todos.length;
  const completedCount = completedTodos.length;
  const progressPercentage = totalTodos > 0 ? Math.round((completedCount / totalTodos) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* 헤더 및 통계 */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-white to-neutral-50 p-6 shadow-lg dark:border-neutral-700/50 dark:from-neutral-800 dark:to-neutral-900">
        {/* 배경 장식 */}
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand/10 to-blue-500/10 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* 제목 */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-blue-600 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-300">
                  TODO LIST
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {totalTodos > 0 ? `총 ${totalTodos}개의 할 일` : '새로운 할 일을 추가해보세요'}
                </p>
              </div>
            </div>

            {/* 진행률 표시 */}
            {totalTodos > 0 && (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-brand">{progressPercentage}%</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {completedCount}/{totalTodos} 완료
                  </div>
                </div>

                {/* 원형 진행률 */}
                <div className="relative h-16 w-16">
                  <svg className="h-16 w-16 rotate-[-90deg]" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-neutral-200 dark:text-neutral-700"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#progress-gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${progressPercentage}, 100`}
                      className="transition-all duration-500 ease-out"
                    />
                    <defs>
                      <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(var(--color-brand))" />
                        <stop offset="100%" stopColor="rgb(59 130 246)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 할 일 목록 */}
      {todos.length === 0 ? (
        /* 빈 상태 */
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50/50 py-16 dark:border-neutral-700 dark:bg-neutral-800/50">
          <div className="rounded-full bg-neutral-100 p-6 dark:bg-neutral-800">
            <svg
              className="h-12 w-12 text-neutral-400 dark:text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-neutral-600 dark:text-neutral-400">
            아직 할 일이 없어요
          </h3>
          <p className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-500">
            위에서 새로운 할 일을 추가해보세요.
            <br />첫 번째 목표를 설정하는 것부터 시작해보세요! 🎯
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 진행 중인 할 일 */}
          {incompleteTodos.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand"></div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  진행 중 ({incompleteTodos.length})
                </h3>
              </div>
              <ul className="space-y-2">
                {incompleteTodos.map((todo, index) => (
                  <li
                    key={todo.id}
                    className="animate-in slide-in-from-left duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 완료된 할 일 */}
          {completedTodos.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  완료됨 ({completedTodos.length})
                </h3>
                <div className="text-xs text-green-600 dark:text-green-400">🎉 잘했어요!</div>
              </div>
              <ul className="space-y-2">
                {completedTodos.map((todo, index) => (
                  <li
                    key={todo.id}
                    className="animate-in slide-in-from-left duration-300"
                    style={{ animationDelay: `${(incompleteTodos.length + index) * 50}ms` }}
                  >
                    <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 하단 격려 메시지 */}
      {totalTodos > 0 && (
        <div className="rounded-xl bg-gradient-to-r from-green-50 to-blue-50 p-4 dark:from-green-900/20 dark:to-blue-900/20">
          <div className="flex items-center gap-3">
            <div className="text-2xl">
              {progressPercentage === 100 ? '🎉' : progressPercentage >= 50 ? '💪' : '🌱'}
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {progressPercentage === 100
                  ? '모든 할 일을 완료했어요! 정말 대단해요!'
                  : progressPercentage >= 50
                    ? '절반 이상 완료했어요! 조금만 더 힘내세요!'
                    : '좋은 시작이에요! 하나씩 차근차근 해나가세요!'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
