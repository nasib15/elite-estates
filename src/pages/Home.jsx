import Banner from "../components/Banner";
import Estates from "../components/Estates";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <div className="max-w-[96%] mx-auto">
      <Banner></Banner>
      <Estates></Estates>
    </div>
  );
};

export default Home;
