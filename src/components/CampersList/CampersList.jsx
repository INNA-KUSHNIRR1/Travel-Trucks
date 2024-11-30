import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';
import {
  selectCampers,
  selectCurrentPage,
  selectFilteredCampers,
  selectTotalItems,
} from '../../redux/campers/selectors';
import { setPage } from '../../redux/campers/slice';
import { nanoid } from 'nanoid';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const totalItems = useSelector(selectTotalItems);
  const filteredCampers = useSelector(selectFilteredCampers);
  const dataToRender = filteredCampers.length > 0 ? filteredCampers : campers;

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };
  const hasMoreItems = campers.length < totalItems; // Проверяем, есть ли еще данные

  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.list}>
          {dataToRender.map(camper => {
            return (
              <CamperItem key={nanoid()} camper={camper} camperId={camper.id} />
            );
          })}
        </ul>
        {hasMoreItems && (
          <Button color="transparent" size="mini" onClick={handleLoadMore}>
            Load more
          </Button>
        )}
      </div>
    </>
  );
};
export default CampersList;
