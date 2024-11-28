import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={linkClass} end={true}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
