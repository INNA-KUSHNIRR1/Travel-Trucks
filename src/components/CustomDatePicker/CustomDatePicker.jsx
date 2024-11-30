import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CustomDatePicker.module.css';

const CustomDatePicker = ({ value, onChange }) => {
  const today = new Date();

  return (
    <div>
      <label htmlFor="bookingDate" className={css.srOnly}>
        Booking date
      </label>
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="Booking date*"
        id="bookingDate"
        name="bookingDate"
        className={css.inputDate}
        required
        minDate={today}
        calendarClassName={css.customCalendar}
      />
    </div>
  );
};

export default CustomDatePicker;
