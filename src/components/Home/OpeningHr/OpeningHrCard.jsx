import { LuClock } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { TbPhoneCalling } from "react-icons/tb";

const OpeningHrCard = ({ item }) => {
  const { icon, title, description, background } = item || {};

  const getIcon = (iconName) => {
    switch (iconName) {
      case "LuClock":
        return <LuClock size={30} />;
      case "CiLocationOn":
        return <CiLocationOn size={30} />;
      case "TbPhoneCalling":
        return <TbPhoneCalling size={30} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={`card   text-white bg-[${background}]`}>
        <div className="card-body text-center">
          <div className=" flex  justify-center">{getIcon(icon)}</div>

          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default OpeningHrCard;
