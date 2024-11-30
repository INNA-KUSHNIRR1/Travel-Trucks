import sprite from '../../assets/icons/symbol-defs.svg';
import css from './SvgIcon.module.css';

const SvgIcon = ({ id, stroke, fill, ...props }) => {
  return (
    <svg className={css.icon} stroke={stroke} fill={fill} {...props}>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};
export default SvgIcon;
