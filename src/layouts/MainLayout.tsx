import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Spiritual Platform</p>
      </footer>
    </div>
  );
};

export default MainLayout;