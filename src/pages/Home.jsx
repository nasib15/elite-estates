import Banner from "../components/Banner";
import Estates from "../components/Estates";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

AOS.init();

const Home = () => {
  return (
    <div className="max-w-[96%] mx-auto">
      <Helmet>
        <title>Home | Elite Estates</title>
      </Helmet>
      <Banner></Banner>
      <Estates></Estates>
    </div>
  );
};

export default Home;
