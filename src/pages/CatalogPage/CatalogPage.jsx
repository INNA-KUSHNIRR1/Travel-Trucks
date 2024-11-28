import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import CampersList from '../../components/CampersList/CampersList';
import Filters from '../../components/Filters/Filters';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { selectCampers } from '../../redux/campers/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const campers = useSelector(selectCampers);
  // console.log('campers', campers);

  useEffect(() => {
    // console.log('fetchCampers');

    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className={css.sectionCatalog}>
      <div className={css.contentCatalog}>
        <div className={css.boxTools}>
          <label className={css.label}>
            Location
            <div className={css.inputContainer}>
              <SvgIcon
                className={css.map}
                id="icon-Map"
                width="20"
                height="20"
                fill={inputValue ? '#101828' : '#6c717b'}
              />
              <input
                className={css.input}
                type="text"
                name="location"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="City"
              />
            </div>
          </label>
          <Filters />
          <Button>Search</Button>
        </div>
        <div className={css.wrapperList}>
          <CampersList campers={campers} />
          <Button color="transparent" size="mini">
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CatalogPage;
