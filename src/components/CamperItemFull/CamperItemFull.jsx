import SvgIcon from '../SvgIcon/SvgIcon';
import css from './CamperItemFull.module.css';

const CamperItemFull = ({ camper }) => {
  const { gallery, name, rating, reviews, description, location, price } =
    camper;
  return (
    <>
      <div className={css.card}>
        <div className={css.wrapper}>
          <div className={css.infoPrice}>
            <div className={css.info}>
              <h4 className={css.name}>{name}</h4>
              <div className={css.reviewAndLocation}>
                <div className={css.box}>
                  <SvgIcon id="icon-star-Pressed" width="16" height="16" />

                  <span>
                    {rating}({reviews.length} reviews)
                  </span>
                </div>
                <div className={css.box}>
                  <SvgIcon
                    id="icon-Map"
                    width="16"
                    height="16"
                    stroke="#101828"
                  />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            <p className={css.price}>€{price.toFixed(0)}</p>
          </div>

          <ul className={css.imgWrapper}>
            {gallery.map(item => {
              return (
                <li key={item.original} className={css.itemImg}>
                  <img
                    className={css.img}
                    src={item.original}
                    alt={description}
                  />
                </li>
              );
            })}
          </ul>
          <p className={css.description}>{description}</p>
        </div>
      </div>
    </>
  );
};
export default CamperItemFull;
