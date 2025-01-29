import CardButton from "../Share/cardButton/CardButton";
import img1 from '../../assets/Products/download (6).jfif'

const ShopCard = () => {
    return (
        <div className="bg-white p-5 text-center relative">
        <img src={img1} className="w-full  object-cover" alt="" />
        <p className="absolute top-5 right-5 bg-black text-white p-1">20% Off</p>
        <p className="font-semibold pt-2">Lorem, ipsum.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <CardButton text={"Buy Now"}></CardButton>
    </div>
    );
};

export default ShopCard;