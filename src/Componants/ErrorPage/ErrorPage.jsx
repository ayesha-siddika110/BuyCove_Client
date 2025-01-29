import { Link } from 'react-router';
import logo from '../../assets/logo.png'
import PrimaryButton from '../Share/PrimaryButton/PrimaryButton';

const ErrorPage = () => {
    return (
        <div className='bg-black min-h-screen'>
        <img src={logo} alt="" />
        <div className="h-[70vh] flex flex-col justify-center items-center">
            <p className="text-9xl font-semibold text-gray-600">404</p>
            <p className="text-5xl">Page Not Found</p>
        <Link to="/" className='text-white mt-5'><PrimaryButton text={"Go Back Home"}></PrimaryButton></Link>

            
        </div>
        </div>
    );
};

export default ErrorPage;