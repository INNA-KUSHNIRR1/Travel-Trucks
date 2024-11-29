import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import CampersList from '../../components/CampersList/CampersList';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { selectCampers, selectLoading } from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';
import Location from '../../components/Location/Location';

const CatalogPage = () => {
  const [filters, setFilters] = useState({
    selectedOption: [],
    selectedForm: null,
    selectedCity: '',
  });
  console.log('filters', filters);

  const buildFilterQuery = filters => {
    const query = new URLSearchParams();
    if (filters.selectedOption.length > 0) {
      filters.selectedOption.forEach(option => {
        query.append(option, 'true');
      });
    }
    if (filters.selectedForm) query.append('form', filters.selectedForm);
    if (filters.selectedCity) query.append('location', filters.selectedCity);
    return query.toString();
  };

  const dispatch = useDispatch();
  const isLoader = useSelector(selectLoading);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('click!!!!');
    const query = buildFilterQuery(filters);
    console.log(query);

    dispatch(fetchCampers(query));
    // setFilters({
    //   selectedOption: [],
    //   selectedForm: null,
    //   selectedCity: '',
    // });
  };
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <section className={css.sectionCatalog}>
          <div className={css.contentCatalog}>
            <form onSubmit={handleSubmit} className={css.boxTools}>
              <Location
                campers={campers}
                selectedCity={filters.selectedCity}
                // setSelectedCity={setSelectedCity}
                setFilters={setFilters}
              />
              <Filters
                setFilters={setFilters}
                selectedOption={filters.selectedOption}
                // setSelectedOption={setSelectedOption}
                selectedForm={filters.selectedForm}
                // setSelectedForm={setSelectedForm}
              />
              <Button type="submit">Search</Button>
            </form>
            <div className={css.wrapperList}>
              <CampersList campers={campers} />
              <Button color="transparent" size="mini">
                Load more
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default CatalogPage;
