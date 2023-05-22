import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitile from './AppTitile';
const MainLayout = () => {
  return (
    <div>
      <AppTitile />
      <Navs />

      <Outlet />
    </div>
  );
};

export default MainLayout;
