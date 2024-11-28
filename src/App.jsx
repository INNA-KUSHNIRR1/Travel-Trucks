import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const IndividualCamperPage = lazy(() =>
  import('./pages/IndividualCamperPage/IndividualCamperPage'),
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Features = lazy(() => import('./components/Features/Features'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const Layout = lazy(() => import('./components/Layout'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="app">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/catalog/:id" element={<IndividualCamperPage />}>
                <Route index element={<Features />} />
                <Route path="features" element={<Features />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </div>
      </Suspense>
    </>
  );
}

export default App;
