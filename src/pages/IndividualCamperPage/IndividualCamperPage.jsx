import { Link, Outlet } from 'react-router-dom';

const IndividualCamperPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default IndividualCamperPage;
