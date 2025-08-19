import { NavLink } from 'react-router-dom';

function Header() {
  // ts 자리

  // tsx 자리
  return (
    <header>
      <div>
        <h1>나의 TODO APP</h1>
        <nav>
          <NavLink to="/">홈</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
