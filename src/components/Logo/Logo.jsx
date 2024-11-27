import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <div className={css.logo} href="./index.html">
        <span className={css.travel}>Travel</span>
        <span className={css.trucks}>Trucks</span>
      </div>
    </>
  );
};

export default Logo;
