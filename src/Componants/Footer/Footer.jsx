import logo from '../../assets/logo.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Footer = () => {
    return (
        <div className="min-h-[400px] bg-black">
            <section className="w-[95%] lg:h-[400px] flex items-center justify-center m-auto">
                <img src={logo} alt="Logo" className=' bg-blue-900' />
                <section className='w-[30%] pl-20 text-center text-base-300'>
                    <h1 className='text-xl text-gray-600'>Address</h1>
                    <p>Dinajpur Main Street, Bangladesh</p>
                    <p>+8801548785544</p>
                    
                </section>
                <div className='w-[40%] '>
                    <p className='pl-[10%] text-xl pb-5  text-gray-600'>Contact With Us</p>
                    <div className='flex flex-col w-[80%] m-auto gap-3'>
                        <input className='input  border-orange-600 bg-black text-base-300'  type="email" placeholder='Enter your Email' />
                        <textarea className='input  border-orange-600 bg-black text-base-300 p-2' placeholder='Write Something'  type="text" />
                        <button className='w-32 text-base-300'><PrimaryButton text={"Send"}></PrimaryButton></button>
                    </div>
                </div>


            </section>
            
        </div>
    );
};

export default Footer;