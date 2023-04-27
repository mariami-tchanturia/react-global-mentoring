import { Outlet } from 'react-router-dom';

import { MoviesListing, Footer } from './components';

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <MoviesListing />
      <Footer />
    </>
  );
};

export default AppLayout;
