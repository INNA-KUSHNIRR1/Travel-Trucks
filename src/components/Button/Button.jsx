import css from './Button.module.css';

const Button = ({ children, color = 'red', size = '', onClick }) => {
  return (
    <>
      <button className={`${css[color]} ${css[size]}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;
