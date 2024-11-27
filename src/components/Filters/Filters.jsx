import { useState } from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Filters.module.css';
import { options } from '../../../public/helpers/options';
import { forms } from '../../../public/helpers/forms';

const Filters = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  console.log('selectedCriteria', selectedOption);

  const [selectedForm, setSelectedForm] = useState(null);
  console.log('selectedForm', selectedForm);

  // Обираємо опції
  const toggleCriterion = option => {
    console.log('option', option);

    setSelectedOption(
      prev =>
        prev.includes(option)
          ? prev.filter(item => item !== option) // видаляємо опцію якщо є
          : [...prev, option], // Добавляємо опцію
    );
  };

  //обираємо форму кемпера
  const handleSelectForm = form => {
    setSelectedForm(form);
  };

  return (
    <>
      <div>
        <h2 className={css.filters}>Filters</h2>
        <div>
          <h3 className={css.title}>Vehicle equipment</h3>
          <ul className={css.listOptions}>
            {options.map(({ id, option, icon, fill, stroke }) => (
              <li
                key={id}
                className={`${css.item} ${
                  selectedOption.includes(option) ? css.selected : ''
                }`}
              >
                <input
                  type="checkbox"
                  id={`criterion-${id}`}
                  checked={selectedOption.includes(option)}
                  onChange={() => toggleCriterion(option)}
                />
                <label htmlFor={`criterion-${id}`} className={css.label}>
                  <SvgIcon
                    id={icon}
                    width="32"
                    height="32"
                    fill={fill}
                    stroke={stroke}
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={css.title}>Vehicle type</h3>
          <ul className={`${css.listOptions} ${css.height}`}>
            {forms.map(form => (
              <li
                key={form.type}
                className={`${css.item} ${css.boxSpecial} ${
                  selectedForm === form.type ? css.selected : ''
                }`}
              >
                <label>
                  <input
                    type="radio"
                    name="vehicleType"
                    value={form.type}
                    checked={selectedForm === form.type}
                    onChange={() => handleSelectForm(form.type)}
                    className={css.radioInput}
                  />
                  <div className={css.labelForm}>
                    <SvgIcon
                      id={form.icon}
                      width="32"
                      height="32"
                      fill={form.fill}
                    />
                    <p>{form.type}</p>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Filters;
