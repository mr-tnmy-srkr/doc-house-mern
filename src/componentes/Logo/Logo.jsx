import logo from "../../assets/Group 1.png"

const Logo = () => {
    return(
        <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h2 className="font-bold text-3xl"> <span className="text-[#F7A582]">Doc</span> <span className="text-white">House</span></h2>
        </div>
    )}
export default Logo;