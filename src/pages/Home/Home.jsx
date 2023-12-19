import Banner from "../../components/Home/Banner/Banner";
import NavBar from "../../components/Home/NavBar/NavBar";
import OpeningHr from "../../components/Home/OpeningHr/OpeningHr";
import OurServices from "../../components/Home/OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <OurServices />
        <OpeningHr />
    </div>
  );
};

export default Home;
