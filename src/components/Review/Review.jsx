import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Review.module.css';

const Review = ({ review }) => {
  const {
    reviewer_name,
    comment,
    // reviewer_rating
  } = review;
  return (
    <>
      <li className={css.wrapper}>
        <div className={css.info}>
          <div>A</div>
          <div className={css.name}>
            <span>{reviewer_name}</span>
            <div>
              <ul className={css.rating}>
                <SvgIcon id="icon-star-Pressed" width="16" height="16" />
              </ul>
            </div>
          </div>
        </div>
        <p>{comment}</p>
      </li>
    </>
  );
};
export default Review;
