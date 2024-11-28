import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './IndividualCamperPage.module.css';
import { useSelector } from 'react-redux';
import { selectedCamper } from '../../redux/campers/selectors';
import CamperItemFull from '../../components/CamperItemFull/CamperItemFull';
import Forma from '../../components/Forma/Forma';

const IndividualCamperPage = () => {
  const { id } = useParams();
  const camper = useSelector(selectedCamper);

  const linkClass = ({ isActive }) =>
    `${css.link} ${isActive ? css.activeLink : ''}`;

  if (!camper) return <h2>Product not found</h2>;

  return (
    <section className={css.sectionCamper}>
      <div className={css.container}>
        <CamperItemFull camper={camper} />

        <div className={css.infoForma}>
          <div className={css.box}>
            <ul className={css.info}>
              <li className={css.link}>
                <NavLink to={`/catalog/${id}/features`} className={linkClass}>
                  Features
                </NavLink>
              </li>
              <li className={css.link}>
                <NavLink to="reviews" className={linkClass}>
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
  );
};
export default IndividualCamperPage;
