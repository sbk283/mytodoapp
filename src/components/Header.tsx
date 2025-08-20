import { NavLink } from 'react-router-dom';

function Header() {
  // ts 자리

  // tsx 자리
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="container-app flex items-center py-6">
        <h1 className="flex-1 text-2xl font-bold tracking-tighter">나만의 TODO APP</h1>
        <nav>
          <NavLink to="/">홈</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
