import { nanoid } from 'nanoid';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Option.module.css';

const Option = ({ arr }) => {
  const { option, icon, fill, stroke } = arr;

  return (
    <>
      <li key={nanoid()} className={css.option}>
        <SvgIcon id={icon} width="20" height="20" fill={fill} stroke={stroke} />
        <span>{option}</span>
      </li>
    </>
  );
};
export default Option;
