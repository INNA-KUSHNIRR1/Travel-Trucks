import css from './OptionsList.module.css';
import { options } from '../../../helpers/options';
import Option from '../Option/Option';
import { nanoid } from 'nanoid';

const OptionsList = ({ camper }) => {
  //отримуємо всі властивості зі значенням true
  const trueOptions = Object.entries(camper)
    .filter(([key, value]) => value === true)
    .map(([key]) => key); //вилучаємо тільки ключи

  //шукаємо ключи в хелпері options
  const renderedOptions = options.filter(option =>
    trueOptions.includes(option.option),
  );

  return (
    <>
      <ul className={css.listOptions}>
        {renderedOptions.map(arr => (
          <Option key={nanoid()} arr={arr} />
        ))}
      </ul>
    </>
  );
};
export default OptionsList;
