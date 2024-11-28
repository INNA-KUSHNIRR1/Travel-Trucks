import { useLocation } from 'react-router-dom';
import css from './Reviews.module.css';
import Review from '../Review/Review';

const Reviews = () => {
  const location = useLocation();
  const camper = location.state;
  const { reviews, id, name } = camper;

  return (
    <>
      <div>
        <ul className={css.container}>
          {reviews.map(review => (
            <Review key={`${id}${name}`} review={review} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Reviews;
