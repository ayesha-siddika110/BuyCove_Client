

import { Outlet } from 'react-router';
import Navbar from '../../Componants/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
            
        </div>
    );
};

export default MainLayout;