import Button from '../../components/Button/Button';
import Filters from '../../components/Filters/Filters';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
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
              />
              <input
                className={css.input}
                type="text"
                name="location"
                placeholder="Kyiv, Ukraine"
              />
            </div>
          </label>
          <Filters />
          <Button>Search</Button>
        </div>
        <div>list{/* <CampersList/> */}</div>
      </div>
    </section>
  );
};
export default CatalogPage;
