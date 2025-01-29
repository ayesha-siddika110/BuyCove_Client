

import { Outlet } from 'react-router';
import Navbar from '../../Componants/Navbar/Navbar';
import Footer from '../../Componants/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[90vh] bg-base-300'>

            <Outlet></Outlet>
            </div>
          
            {/* footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;