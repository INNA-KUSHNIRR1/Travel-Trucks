import sprite from '../../assets/icons/symbol-defs.svg';

const SvgIcon = ({ id, stroke, fill, ...props }) => {
  return (
    <svg stroke={stroke} fill={fill} {...props}>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};
export default SvgIcon;
