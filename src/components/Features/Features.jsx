import css from './Features.module.css';
import OptionsList from '../OptionsList/OptionsList';
import { useSelector } from 'react-redux';
import { selectedCamper } from '../../redux/campers/selectors';
import { nanoid } from 'nanoid';

const Features = () => {
  const camper = useSelector(selectedCamper);
  const { form, length, width, height, tank, consumption } = camper;
  const camperCurrent = {
    form: form,
    length: length,
    width: width,
    height: height,
    tank: tank,
    consumption: consumption,
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.listOptions}>
          <OptionsList camper={camper} />
        </div>

        <h4 className={css.title}>Vehicle details</h4>
        <ul className={css.listData}>
          {Object.entries(camperCurrent).map(([key, value]) => {
            return (
              <li key={nanoid()} className={css.item}>
                <span className={css.parameters}>{key}</span>
                <span>{value}</span>
              </li>
            );
          })}
          {/* <li className={css.item}>
            <span>Form</span>
            <span>{form}</span>
          </li>
          <li className={css.item}>
            <span>Length</span>
            <span>{length}</span>
          </li>
          <li className={css.item}>
            <span>Width</span>
            <span>{width}</span>
          </li>
          <li className={css.item}>
            <span>Height</span>
            <span>{height}</span>
          </li>
          <li className={css.item}>
            <span>Tank</span>
            <span>{tank}</span>
          </li>
          <li className={css.item}>
            <span>Consumption</span>
            <span>{consumption}</span>
          </li> */}
        </ul>
      </div>
    </>
  );
};
export default Features;
