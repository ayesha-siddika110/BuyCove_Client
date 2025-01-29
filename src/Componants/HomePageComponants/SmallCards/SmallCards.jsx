
import img1 from '../../../assets/Products/download (6).jfif'
import img2 from '../../../assets/Products/download (6).jfif'
const SmallCards = () => {

    return (
        <div className='grid grid-cols-4 py-14'>
            <div className='p-5'>
                <img src={img1} className='w-[200px] h-[200px] m-auto object-cover rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            <div className='p-5'>
                <img src={img1} className='w-[200px] h-[200px] m-auto object-cover rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            <div className='p-5'>
                <img src={img1} className='w-[200px] h-[200px] object-cover m-auto rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            <div className='p-5'>
                <img src={img1} className='w-[200px] h-[200px] object-cover m-auto rounded-full' alt="" />
                <p className='text-center pt-3'>Lorem ipsum </p>
            </div>
            
        </div>
    );
};

export default SmallCards;