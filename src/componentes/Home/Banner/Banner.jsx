import banner from "../../../assets/Rectangle.png"
import img from "../../../assets/Rectangle 20077.png"

const Banner = () => {
    return(
        <div className="relative h-[80vh]">
            <img src={banner} alt="" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-evenly">
               <div>
               <h1 className="text-white">Your Best Medical Help Center</h1>
               <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
               </div>
                <div className="relative w-64">
                    <img className="absolute top-40 right-44" src={img} alt="omg" />
                    <img className="" src={img} alt="omg" />
                    <img className="absolute top-40 left-24" src={img} alt="omg" />
                </div>
            </div>
        </div>
    )}
export default Banner;
