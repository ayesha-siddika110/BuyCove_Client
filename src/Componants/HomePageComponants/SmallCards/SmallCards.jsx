
import img1 from '../../../assets/Products/download (6).jfif'
import img2 from '../../../assets/Products/download (7).jfif'
import PrimaryHeading from '../../Share/PrimaryHeading/PrimaryHeading';
const SmallCards = () => {

    return (
        <>
        <p className=' pl-[5%]'><PrimaryHeading text={"Top Selling"}></PrimaryHeading></p>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-14'>
            <div className='p-5  group'>
                <img src={img1} className='w-[200px] group-hover:scale-110 h-[200px] m-auto object-cover rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            <div className='p-5'>
                <img src={img1} className='w-[200px] h-[200px] m-auto object-cover rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            <div className='p-5'>
                <img src={img2} className='w-[200px] h-[200px] m-auto object-cover rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            <div className='p-5'>
                <img src={img1} className='w-[200px] h-[200px] object-cover m-auto rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            <div className='p-5'>
                <img src={img2} className='w-[200px] h-[200px] object-cover m-auto rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            
        </div>
        </>
    );
};

export default SmallCards;