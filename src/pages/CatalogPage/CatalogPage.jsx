import { useState } from 'react';
import Button from '../../components/Button/Button';
import CampersList from '../../components/CampersList/CampersList';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import {
  selectCampers,
  selectLoading,
  selectError,
  selectMessage,
  selectCurrentPage,
  selectLimit,
} from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';
import Location from '../../components/Location/Location';
import { setFilter } from '../../redux/campers/slice.js';
import Message from '../../components/Message/Message.jsx';
import { forms } from '../../../helpers/forms.jsx';

const CatalogPage = () => {
  const [filters, setFilters] = useState({
    selectedOption: [],
    selectedForm: forms[0]?.type || '',
    selectedCity: '',
  });

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoader = useSelector(selectLoading);
  const campers = useSelector(selectCampers);
  const message = useSelector(selectMessage);
  const currentPage = useSelector(selectCurrentPage);
  const limit = useSelector(selectLimit);

  const buildFilterQuery = filters => {
    const query = new URLSearchParams();
    if (filters.selectedCity) query.append('location', filters.selectedCity);
    if (filters.selectedOption.length > 0) {
      filters.selectedOption.forEach(option => {
        query.append(option, 'true');
      });
    }
    if (filters.selectedForm) query.append('form', filters.selectedForm);
    return query.toString();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = buildFilterQuery(filters);

    dispatch(setFilter(filters));
    dispatch(fetchCampers({ page: currentPage, limit, query: query }));
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <section>
          <div className={css.contentCatalog}>
            <form onSubmit={handleSubmit} className={css.boxTools}>
              <Location
                campers={campers}
                selectedCity={filters.selectedCity}
                setFilters={setFilters}
              />
              <Filters
                setFilters={setFilters}
                selectedOption={filters.selectedOption}
                selectedForm={filters.selectedForm}
              />
              <Button type="submit">Search</Button>
            </form>
            <div className={css.wrapperList}>
              {isLoader ? (
                <Loader />
              ) : error ? (
                <div className={css.errorMessage}>{error}</div>
              ) : (
                <>
                  {message ? (
                    <Message message={message} />
                  ) : (
                    <CampersList campers={campers} />
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default CatalogPage;
