

import { Outlet, useLocation } from 'react-router';
import Navbar from '../../Componants/Navbar/Navbar';
import Footer from '../../Componants/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    const path = location.pathname === '/login' || location.pathname === '/register'
    return (
        <div>
            {!path && <Navbar></Navbar>}
            <div className='min-h-[90vh] bg-base-300'>

            <Outlet></Outlet>
            </div>
          
            {/* footer */}
            {!path && <Footer></Footer>}
            
        </div>
    );
};

export default MainLayout;