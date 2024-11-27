import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

const CampersList = ({ campers }) => {
  return (
    <>
      <div>
        <ul className={css.list}>
          {campers.map(camper => {
            return (
              <CamperItem
                key={camper.id}
                camper={camper}
                camperId={camper.id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default CampersList;
