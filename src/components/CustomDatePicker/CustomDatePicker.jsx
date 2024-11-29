import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CustomDatePicker.module.css';

const CustomDatePicker = ({ value, onChange }) => {
  const today = new Date(); // Получаем текущую дату

  return (
    <div>
      <label htmlFor="bookingDate" className={css.srOnly}>
        Booking date
      </label>
      <DatePicker
        selected={value} // передаем значение из состояния
        onChange={onChange} // передаем обработчик изменения
        dateFormat="yyyy/MM/dd" // Формат отображаемой даты
        placeholderText="Booking date*" // Плейсхолдер для инпута
        id="bookingDate" // id инпута
        name="bookingDate" // Имя инпута
        className={css.inputDate}
        required // Обязательное поле
        minDate={today} // Устанавливаем минимум на текущую дату
        calendarClassName={css.customCalendar} // Класс для стилизации
      />
    </div>
  );
};

export default CustomDatePicker;
