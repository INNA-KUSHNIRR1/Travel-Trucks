import css from './OptionsList.module.css';
import { options } from '../../../helpers/options';
import Option from '../Option/Option';

const OptionsList = ({ camper }) => {
  console.log('camper', camper);

  //отримуємо всі властивості зі значенням true
  const trueOptions = Object.entries(camper)
    .filter(([key, value]) => value === true)
    .map(([key]) => key); //вилучаємо тільки ключи
  console.log('trueOptions', trueOptions);

  //шукаємо ключи в хелпері options
  const renderedOptions = options.filter(option =>
    trueOptions.includes(option.option),
  );
  console.log('renderedOptions', renderedOptions);

  return (
    <>
      <ul className={css.listOptions}>
        {renderedOptions.map(arr => (
          <Option key={arr.key} arr={arr} />
        ))}
      </ul>
    </>
  );
};
export default OptionsList;
