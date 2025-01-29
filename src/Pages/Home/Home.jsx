import DealForToday from "../../Componants/HomePageComponants/DealForToday/DealForToday";
import Slider from "../../Componants/HomePageComponants/Slider/Slider";
import SmallCards from "../../Componants/HomePageComponants/SmallCards/SmallCards";


const Home = () => {
    return (
        <div>
            {/* advertise banner */}
            <Slider></Slider>
            
            {/* some animation or other , like small cards*/}
            <SmallCards></SmallCards>

            {/* deal For Today */}
            <DealForToday></DealForToday>
        </div>
    );
};

export default Home;