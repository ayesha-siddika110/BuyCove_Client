import banner1 from '../../assets/Slider/Black and White Modern Black Friday Sale Banner.png'
import banner2 from '../../assets/Slider/Green and Yellow Simple Clean Shoes Sale Banner.png'
import banner3 from '../../assets/Slider/Black and Pink Edgy Black Friday Banner Landscape.png'

const Blogs = () => {
    return (
        <div className='w-[95%] m-auto py-10'>
            <div className='md:flex gap-5'>

                <div
                    style={{
                        backgroundImage: `url(${banner1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='md:w-[50%] w-[95%] m-auto text-white md:text-lg h-[420px] mb-5 md:mb-0 flex items-end'>

                    <p className='bg-[#000000d7] p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur dolore doloremque temporibus officia deleniti laudantium ratione repellendus, provident quaerat illum neque quia perferendis minima, commodi nostrum explicabo labore officiis eveniet sapiente cum repudiandae optio vitae. Voluptatem voluptas quas aliquam, nesciunt eaque sed nulla veritatis architecto id molestiae adipisci perferendis.</p>


                </div>
                <div className='md:w-[50%] w-[95%] m-auto flex flex-col gap-5'>
                    <div
                        style={{
                            backgroundImage: `url(${banner2})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className=' h-[200px] text-white md:text-lg flex items-end'>

                        <p className='bg-[#000000d7] p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur dolore doloremque temporibus officia deleniti laudantium ratione repellendus, provident quaerat illum neque quia perferendis minima.</p>


                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${banner3})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className=' h-[200px] text-white md:text-lg flex items-end'>

                        <p className='bg-[#000000d7] p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur dolore doloremque temporibus officia deleniti laudantium ratione repellendus, provident quaerat illum neque quia perferendis minima.</p>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;