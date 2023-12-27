import Banner from "../../components/Home/Banner/Banner";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import ExpertDoctors from "../../components/Home/ExpertDoctors/ExpertDoctors";
import NavBar from "../../components/Shared/NavBar/NavBar";
import OpeningHr from "../../components/Home/OpeningHr/OpeningHr";
import OurServices from "../../components/Home/OurServices/OurServices";
import Review from "../../components/Home/Review/Review";
import Footer from "../../components/Shared/Footer/Footer";

const Home = () => {
  return (
    <div className="space-y-20">
      <NavBar />
      <Banner />
      <OurServices />
        <OpeningHr />
        <Review/>
        <ExpertDoctors/>
        <ContactUs/>
        <Footer/>
    </div>
  );
};

export default Home;
