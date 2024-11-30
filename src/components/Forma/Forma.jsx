import { useState } from 'react';
import Button from '../Button/Button';
import css from './Forma.module.css';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import toast, { Toaster } from 'react-hot-toast';

const Forma = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name } = formData;
    toast.success(
      `Hello, ${name}!
We have received your camper booking request. We will check availability and get back to you via the provided email address to confirm your booking.
If you have any questions, feel free to reach out!
Best regards,
TravelTrucks`,
      {
        duration: 5000,
        position: 'center',
        icon: '',
        style: {
          lineHeight: 1.5,
          fontWeight: 400,
          background: '#f7f7f7',
          color: '#101828',
          fontSize: '20px',
          padding: '25px 25px',
          borderRadius: '10px',
          border: '2px solid #475467',
          maxWidth: '500px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    );

    setFormData({ name: '', email: '', bookingDate: '', comment: '' });
  };

  return (
    <>
      <div>
        <div className={css.container}>
          <div className={css.bookNow}>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.description}>
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.formGroup}>
              <label htmlFor="name" className={css.srOnly}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name*"
                onChange={handleChange}
                required
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="email" className={css.srOnly}>
                Email
              </label>{' '}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email*"
                onChange={handleChange}
                required
              />
            </div>
            <div className={css.formGroup}>
              <CustomDatePicker
                value={formData.bookingDate}
                onChange={date =>
                  handleChange({ target: { name: 'bookingDate', value: date } })
                }
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="comment" className={css.srOnly}>
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Comment"
                rows="6"
                required
              ></textarea>
            </div>
            <div className={css.btn}>
              <Button size="normal">Send</Button>
            </div>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
};
export default Forma;
