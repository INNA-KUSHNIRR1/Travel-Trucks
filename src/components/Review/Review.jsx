import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Review.module.css';

const Review = ({ review }) => {
  const { reviewer_name, comment, reviewer_rating } = review;

  const capitalLetter = reviewer_name[0];
  const totalStar = 5;
  console.log('Rating received:', reviewer_rating);
  return (
    <>
      <li className={css.wrapper}>
        <div className={css.info}>
          <div className={css.icon}>{capitalLetter}</div>
          <div className={css.name}>
            <span>{reviewer_name}</span>
            <div className={css.rating}>
              {[...Array(totalStar)].map((_, index) => (
                <SvgIcon
                  key={index}
                  id="icon-star-Default"
                  width="16"
                  height="16"
                  fill={index < reviewer_rating ? '#FFC531' : '#F2F4F7'}
                />
              ))}
            </div>
          </div>
        </div>
        <p>{comment}</p>
      </li>
    </>
  );
};
export default Review;
