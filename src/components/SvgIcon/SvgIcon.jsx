import sprite from '../../assets/icons/symbol-defs.svg';
import css from './SvgIcon.module.css';

const SvgIcon = ({ id, stroke, 
  // className = '', 
  ...props }) => {
  return (
    <svg 
    // className={`icon ${className}`} 
    className={css.icon}
    stroke={stroke} {...props}>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};
export default SvgIcon;
