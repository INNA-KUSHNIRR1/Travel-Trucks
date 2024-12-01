import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CustomDatePicker.module.css';
import { useState } from 'react';

const CustomDatePicker = ({ startDate, endDate, onChange }) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false); // Состояние для отображения календаря
  const today = new Date();

  const handleCalendarToggle = () => {
    setCalendarOpen(prevState => !prevState);
  };
  const handleDateChange = dates => {
    const [start, end] = dates;
    onChange({ startDate: start, endDate: end });

    if (start && end) {
      setCalendarOpen(false);
    }
  };
  return (
    <div className={css.datePickerWrapper}>
      <label htmlFor="bookingDate" className={css.srOnly}>
        Booking date
      </label>
      <input
        type="text"
        id="bookingDate"
        onClick={handleCalendarToggle}
        value={
          startDate
            ? `${startDate.toLocaleDateString()} - ${
                endDate ? endDate.toLocaleDateString() : ''
              }`
            : ''
        }
        placeholder="Booking date*"
        readOnly
        className={css.inputDate}
        autoComplete="bookingDate"
      />
      {isCalendarOpen && (
        <div className={css.datePickerContainer}>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="yyyy/MM/dd"
            minDate={today}
            inline
            calendarClassName={css.customCalendar}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
