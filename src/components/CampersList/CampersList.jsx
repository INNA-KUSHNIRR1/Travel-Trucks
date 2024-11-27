import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <>
      <div>
        <ul className={css.list}>
          <CamperItem
          //   camperId={id}
          />
        </ul>
      </div>
    </>
  );
};
export default CampersList;
