import { useState } from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Location.module.css';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectAllCities } from '../../redux/campers/selectors';

const Location = ({ selectedCity, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cities = useSelector(selectAllCities);

  const toggleList = () => {
    setIsOpen(true);
  };

  const handleCitySelect = city => {
    setFilters(prevFilters => ({
      ...prevFilters,
      selectedCity: city,
    }));
    setIsOpen(false);
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      selectedCity: value,
    }));
  };

  return (
    <>
      <label className={css.label}>
        Location
        <div className={css.inputContainer}>
          <SvgIcon
            className={css.map}
            id="icon-Map"
            width="20"
            height="20"
            fill={selectedCity ? '#101828' : '#6c717b'}
          />
          <input
            className={css.input}
            type="text"
            name="location"
            value={selectedCity}
            onClick={toggleList}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        {/* Перелік міст */}
      </label>
      {isOpen && (
        <ul className={css.dropdown}>
          {cities.map(city => (
            <li
              key={nanoid()}
              className={css.listItem}
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Location;
