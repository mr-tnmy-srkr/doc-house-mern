import doctor from "../../../assets/doctor.png";
import tooth from "../../../assets/tooth.png";

const OurServices = () => {
  return (
    <div className="flex justify-between  py-20">
      <div className="flex-1 ">
        <img className="" src={doctor} alt="" />
      </div>
      <div className="flex-1 space-y-8">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="w-[80%] leading-7">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <button className="btn bg-[#F7A582]">Cavity Protection</button>
        <button className="btn">Cosmetic Dentistry</button>
        <button className="btn">Oral Surgery</button>
        <img className="w-full" src={tooth} alt="" />
        <div className="w-[80%] space-y-4">
          <h1 className="text-3xl font-semibold">Electro Gastrology Therapy</h1>
          <p className="leading-7">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error
            <br />
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <button className="btn btn-outline border-[#F7A582] text-[#F7A582]">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
