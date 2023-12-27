import banner from "../../../assets/banner.png";
import Button from "../../Button/Button";

const Banner = () => {
  return (
    <div>
      <img className="lg:w-[1680px] lg:h-[620px]" src={banner} alt="" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-evenly">
        <div>
          <h1 className="text-white w-[595px] text-6xl font-bold">
            Your Best Medical Help Center
          </h1>
          <p className="text-[#F3F3F3] py-4 w-96">
            Lorem Ipsum is simply dummy text they are printing typesetting has
            been the industry’s standard.
          </p>
          <Button btnName="All Service" />
        </div>
        <div className="relative w-64"></div>
      </div>
    </div>
  );
};
export default Banner;
