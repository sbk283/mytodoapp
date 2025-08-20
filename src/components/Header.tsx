import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/80">
      <div className="container-app flex items-center justify-between py-4">
        {/* 로고 영역 */}
        <div className="flex items-center space-x-3">
          {/* 로고 아이콘 */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-blue-600 shadow-lg">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* 앱 제목 */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              나만의
              <span className="bg-gradient-to-r from-brand to-blue-600 bg-clip-text text-transparent">
                TODO
              </span>
            </h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">효율적인 할 일 관리</p>
          </div>
        </div>

        {/* 네비게이션 */}
        <nav className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-brand'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">홈</span>
                {isActive && (
                  <div className="absolute inset-0 rounded-lg bg-brand/10 dark:bg-brand/20" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-brand'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">소개</span>
                {isActive && (
                  <div className="absolute inset-0 rounded-lg bg-brand/10 dark:bg-brand/20" />
                )}
              </>
            )}
          </NavLink>

          {/* 다크모드 토글 버튼 (옵션) */}
          <button className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
