import { Link, Outlet, useParams } from 'react-router-dom';
import css from './IndividualCamperPage.module.css';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import CamperItemFull from '../../components/CamperItemFull/CamperItemFull';

const IndividualCamperPage = () => {
  const { id } = useParams();
  // console.log('id', typeof id);
  // console.log('id from useParams:', id, typeof id);

  const campers = useSelector(selectCampers);
  // console.log('campers', campers);
  // console.log(
  //   'campers ids:',
  //   campers.map(camper => camper.id),
  // );

  const camper = campers.find(camper => camper.id === id);
  // console.log('camper!!!', camper);

  if (!camper) return <h2>Product not found</h2>;

  return (
    <section className={css.sectionCamper}>
      <div className={css.container}>
        <CamperItemFull camper={camper} />

        <div className={css.infoForma}>
          <div className={css.box}>
            <ul className={css.info}>
              <li>
                <Link to="features" state={camper}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="reviews" state={camper}>
                  Reviews
                </Link>
              </li>
            </ul>
            <div className={css.wrapper}>
              <Outlet />
              <div>forma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IndividualCamperPage;
