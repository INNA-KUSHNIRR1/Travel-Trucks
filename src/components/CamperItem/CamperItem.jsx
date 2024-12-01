import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './CamperItem.module.css';
import { Link } from 'react-router-dom';
import OptionsList from '../OptionsList/OptionsList';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdCamperThink } from '../../redux/campers/operations';
import { toggleFavorite } from '../../redux/campers/slice.js';
import { selectFavoriteCampers } from '../../redux/campers/selectors.js';

const CamperItem = ({ camper, camperId }) => {
  const dispatch = useDispatch();
  const [isSelectedCamper, setIsSelectedCamper] = useState(false);

  const toggleSelect = () => {
    dispatch(toggleFavorite(camperId));
    setIsSelectedCamper(prev => !prev);
  };

  //отримуємо обрані кемпери при завантажені компонента
  const favoriteCampers = useSelector(selectFavoriteCampers);
  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem('favoriteCampers')) || [];
    if (storedFavorites) {
      storedFavorites.forEach(id => dispatch(toggleFavorite(id)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('favoriteCampers', JSON.stringify(favoriteCampers));
  }, [favoriteCampers]);

  useEffect(() => {
    setIsSelectedCamper(favoriteCampers.includes(camperId));
  }, [camperId, favoriteCampers]);

  const { gallery, name, rating, reviews, description, location, price } =
    camper;

  const handleGetByIdCamper = () => {
    dispatch(getByIdCamperThink(camperId));
  };

  return (
    <>
      <li className={css.card}>
        <div className={css.imgWrapper}>
          <img
            className={css.img}
            src={gallery[0].original}
            alt={description}
          />
        </div>

        <div className={css.wrapper}>
          <div className={css.title}>
            <h4>{name}</h4>
            <div className={css.price}>
              <p>€{price.toFixed(0)}</p>

              <SvgIcon
                id={
                  isSelectedCamper
                    ? 'icon-Property-1pressed'
                    : 'icon-Property-1Default'
                }
                width="26"
                height="24"
                onClick={toggleSelect}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className={css.info}>
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
            <p className={css.description}>{description}</p>
            <OptionsList camper={camper} />

            <Link to={`/catalog/${camperId}`}>
              <Button size="normal" onClick={handleGetByIdCamper}>
                Show more
              </Button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};
export default CamperItem;
