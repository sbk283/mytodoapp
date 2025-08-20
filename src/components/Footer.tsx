function Footer() {
  return (
    <footer className="container-app border-t border-neutral-200 bg-neutral-50 py-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* 메인 텍스트 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            나의 Todo App
          </h3>
        </div>

        {/* 작성자 정보 */}
        <div className="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400">
          <span>Made with</span>
          <span className="text-red-500">❤️</span>
          <span>by</span>
          <span className="font-medium text-brand">송병근</span>
        </div>

        {/* 기술 스택 */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1 rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <span>⚛️</span>
            <span>React</span>
          </div>
          <div className="flex items-center space-x-1 rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <span>📘</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center space-x-1 rounded-full bg-cyan-100 px-3 py-1 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
            <span>🎨</span>
            <span>Tailwind</span>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-full max-w-xs border-t border-neutral-200 dark:border-neutral-700"></div>

        {/* 하단 텍스트 */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2025 Todo App. 할 일을 효율적으로 관리하세요!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
