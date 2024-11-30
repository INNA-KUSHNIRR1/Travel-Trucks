import Button from '../Button/Button';
import css from './Message.module.css';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/campers/slice';

const Message = ({ message }) => {
  const dispatch = useDispatch();

  const handleShowAll = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <div className={css.errorMessage}>
        <span>{message}</span>
        <Button size="large" onClick={handleShowAll}>
          Show All
        </Button>
      </div>
    </>
  );
};
export default Message;
