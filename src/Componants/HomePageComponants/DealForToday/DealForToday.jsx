import PrimaryHeading from "../../Share/PrimaryHeading/PrimaryHeading";
import img1 from '../../../assets/Products/download (6).jfif'
import img2 from '../../../assets/Products/download (7).jfif'
import CardButton from "../../Share/cardButton/CardButton";
import ShopCard from "../../ShopCard/ShopCard";

const DealForToday = () => {
    return (
        <div className="w-[95%] m-auto">
            <PrimaryHeading text={"Deal For Today"}></PrimaryHeading>

            <div className="md:flex gap-6">
                {/* left section  category top products*/}
                <section className="md:w-[20%] text-lg bg-white p-6">
                    <p className="text-center font-semibold text-2xl pb-3 border-b-2">Category</p>
                    <ul className="flex md:flex-col gap-3 overflow-scroll">
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Beg</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Mobiles</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Parts</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Ring</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Camera</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Computer</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Bike Parts</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Beg</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Mobiles</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Parts</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Ring</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Camera</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Computer</li>
                        <li className="border-b-2 hover:border-orange-600 cursor-pointer py-2 ">Bike Parts</li>
                    </ul>


                </section>
                {/* right Section */}
                <section className="w-[80%] m-auto  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-6 md:mt-0 gap-6">
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>
                    <ShopCard></ShopCard>

                </section>
            </div>

        </div>
    );
};

export default DealForToday;