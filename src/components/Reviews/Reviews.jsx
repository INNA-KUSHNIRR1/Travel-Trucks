import css from './Reviews.module.css';
import Review from '../Review/Review';
import { useSelector } from 'react-redux';
import { selectedCamper } from '../../redux/campers/selectors';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const camper = useSelector(selectedCamper);

  const { reviews } = camper;

  return (
    <>
      <div>
        <ul className={css.container}>
          {reviews.map(review => (
            <Review key={nanoid()} review={review} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Reviews;
