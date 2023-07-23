import Pictures from "../Pictures/Pictures";
import Banner from "./Banner/Banner";
import Colleges from './Colleges/Colleges';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Colleges></Colleges>
            <Pictures></Pictures>
        </div>
    );
};

export default Home;