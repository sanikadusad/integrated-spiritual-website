import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navbar-link navbar-link-active' : 'navbar-link';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className={getLinkClass} end>
        Home
      </NavLink>
      <NavLink to="/about" className={getLinkClass}>
        About
      </NavLink>

      {isAuthenticated ? (
        <>
          <span className="navbar-greeting">Hi, {user?.name}</span>
          <button onClick={handleLogout} className="navbar-logout-btn">
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login" className={getLinkClass}>
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;