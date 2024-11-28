import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './CamperItem.module.css';
import { Link } from 'react-router-dom';
import OptionsList from '../OptionsList/OptionsList';

const CamperItem = ({ camper, camperId }) => {
  //   console.log('camper', camper);

  const [isSelectedCamper, setIsSelectedCamper] = useState(false);

  const toggleSelect = () => {
    const storedSelected = JSON.parse(localStorage.getItem('selected')) || [];
    let updateSelected;

    if (storedSelected.includes(camperId)) {
      updateSelected = storedSelected.filter(id => id !== camperId);
    } else {
      updateSelected = [...storedSelected, camperId];
    }
    localStorage.setItem('selected', JSON.stringify(updateSelected));
    setIsSelectedCamper(true);
  };
  //отримуємо обрані кемпери при завантажені компонента
  useEffect(() => {
    const storedSelected = JSON.parse(localStorage.getItem('selected')) || [];
    setIsSelectedCamper(storedSelected.includes(camperId));
  }, [camperId]);
  const { gallery, name, rating, reviews, description, location } = camper;
  return (
    <>
      <div className={css.card}>
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
              <p>€8000</p>

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
              <Button size="normal">Show more</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CamperItem;
