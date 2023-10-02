import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import Header from '../../Header';
import Banner from "../../Navigation/BannerNavigation"

const MainLayout = () => {
   return (
      <>
            <Header />
            <Outlet />
            <Footer />
      </>
   )
}

export default MainLayout;