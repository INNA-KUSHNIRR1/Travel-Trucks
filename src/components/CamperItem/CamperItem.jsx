import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './CamperItem.module.css';

const CamperItem = ({ camperId }) => {
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

  return (
    <>
      <div className={css.card}>
        <img className={css.img} src="" alt="" />
        <div className={css.wrapper}>
          <div className={css.title}>
            <h4>Name</h4>
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
          <div className={css.reviewAndLocation}>
            <div className={css.box}>
              <SvgIcon id="icon-star-Pressed" width="16" height="16" />

              <span>4.4(2 отзыва)</span>
            </div>
            <div className={css.box}>
              <SvgIcon id="icon-Map" width="16" height="16" stroke="#101828" />
              <span>Kyiv</span>
            </div>
          </div>
          <p>description</p>
          <ul className={css.listOptions}>listOptions</ul>
          <Button size="normal">Show more</Button>
        </div>
      </div>
    </>
  );
};
export default CamperItem;
