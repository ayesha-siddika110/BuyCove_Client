import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/Slider/banner.png'
// import SocialLogin from '../../Share/SocialLogin/SocialLogin';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useForm } from 'react-hook-form';
// import useAuth from '../../Hooks/useAuth';
// import toast from 'react-hot-toast';



const Register = () => {
    const navigate = useNavigate()
    // const {signInwithEmail} = useAuth()
    // const { register, handleSubmit, formState: { errors }, } = useForm()
    // const onSubmit = (data) => {
    //     // console.log(data);
    //     signInwithEmail(data?.email, data?.password)
    //     .then(res=>{
    //         // console.log(res);
    //         toast.success('Sign In')
    //         navigate("/")            
    //     })
    //     .catch(err=>{
    //         console.log(err); 
    //     })

    // }
    return (
        <div
            style={{
                backgroundImage: `url(${img1})`,
                height: '100vh',
                backgroundSize: 'cover'
            }}
            className='py-10'


        >
            <div className=''>

              
                <p className='cursor-pointer w-20 ml-[10%] bg-[#ffffffcb] flex items-center py-2 px-2 gap-2' onClick={() => navigate("/")}>  Back</p> 
                {/* <FaArrowLeft /> */}
            </div>
            <div className='w-[90%] h-full m-auto flex justify-center items-center'>

                <form  className=' bg-white bg-opacity-25  w-[100%] md:w-[50%] lg:w-[40%]  lg:p-10 p-5 space-y-5'>
                    <p className='text-4xl text-center text-white font-semibold uppercase'>Register Now<span className={"text-orange-600"}>!</span></p>
                    <div className='form-control'>
                        <p className='text-white'>Your Name *</p>

                        <input  type="text" placeholder="Type here" className=" py-3 px-4 mt-2 input-bordered w-full bg-[#033b4c00] border border-black text-white" />
                    </div>
                    <div className='form-control'>
                        <p className='text-white'>Photo URL *</p>
                        <input  type="url" placeholder="Type here" className=" py-3 px-4 mt-2 input-bordered w-full bg-[#033b4c00] border border-black text-white" />
                    </div>
                    <div className='form-control'>
                        <p className='text-white'>Email *</p>

                        <input  type="email" placeholder="Type here" className=" py-3 px-4 mt-2 input-bordered w-full bg-[#033b4c00] border border-black text-white" />
                    </div>
                    <div className='form-control'>
                        <p className='text-white'>Password *</p>

                        <input  type="password" placeholder="Type here" className=" py-3 px-4 input-bordered w-full bg-[#033b4c00] border border-black mt-2 text-white" />
                    </div>
                    {/* {errors.password && <span className='text-red-600'>This field is required</span>} */}
                    {/* {errors.password && <span className='text-red-600'>{errors.password.message}</span>} */}

                    <div>
                        <button className='bg-orange-600 w-full text-center py-3 text-white mt-3'>Register</button>

                    </div>
                    {/* <SocialLogin></SocialLogin> */}
                    <Link to="/login" className='hover:underline text-black flex'>Already have an account? please  <p className='pl-2 font-semibold'> Login</p></Link>
                </form>
                <div className='lg:w-[50%] '>

                </div>



            </div>
        </div>
    );
};

export default Register;