import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navbar-link navbar-link-active' : 'navbar-link';

  return (
    <nav className="navbar">
      <NavLink to="/" className={getLinkClass} end>
        Home
      </NavLink>
      <NavLink to="/about" className={getLinkClass}>
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;