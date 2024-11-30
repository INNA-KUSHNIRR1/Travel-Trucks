import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './IndividualCamperPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCamper, selectLoading } from '../../redux/campers/selectors';
import CamperItemFull from '../../components/CamperItemFull/CamperItemFull';
import Forma from '../../components/Forma/Forma';
import Loader from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getByIdCamperThink } from '../../redux/campers/operations';

const IndividualCamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('features');

  const camper = useSelector(selectedCamper);
  const isLoader = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getByIdCamperThink(id));
  }, [id, dispatch]);
  if (isLoader) return <Loader />;
  if (!camper) return <h2>Product not found</h2>;

  return (
    <>
      <section>
        <div className={css.container}>
          <CamperItemFull camper={camper} />

          <div className={css.infoForma}>
            <div className={css.box}>
              <ul className={css.info}>
                <li>
                  <NavLink
                    to="features"
                    className={
                      activeTab === 'features'
                        ? `${css.link} ${css.activeLink}`
                        : css.link
                    }
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="reviews"
                    className={
                      activeTab === 'reviews'
                        ? `${css.link} ${css.activeLink}`
                        : css.link
                    }
                    onClick={() => setActiveTab('reviews')}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <div className={css.wrapper}>
                <Outlet />
                <Forma />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default IndividualCamperPage;
