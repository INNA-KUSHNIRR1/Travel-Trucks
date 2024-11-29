import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <section className={css.sectionHeader}>
        <div className={css.headerContent}>
          <Link to="/">
            <Logo />
          </Link>

          <Navigation />
        </div>
      </section>
    </>
  );
};

export default Header;
